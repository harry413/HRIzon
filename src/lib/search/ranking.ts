import type { Employee } from "@/lib/data/employees";
import { buildVocab, cosine, embed, employeeDoc } from "./embedding";
import type { ParsedQuery } from "./parser";

export type Match = {
  employee: Employee;
  score: number;
  matchedSkills: string[];
  matchedDomains: string[];
  reasons: string[];
};

export function searchEmployees(
  query: string,
  employees: Employee[],
  parsed: ParsedQuery
): Match[] {
  const vocab = buildVocab(employees);
  const qVec = embed(query, vocab);

  return employees
    .map((e) => {
      const doc = employeeDoc(e);
      const eVec = embed(doc, vocab);
      const semantic = cosine(qVec, eVec);

      // Skills matching
      const normalizedSkills = e.skills.map((s) => s.toLowerCase());
      const matchedSkills = parsed.skills.filter((s) =>
        normalizedSkills.includes(s)
      );
      const skillCoverage =
        matchedSkills.length / Math.max(1, parsed.skills.length);
      const skillScore =
        parsed.skills.length > 0
          ? (parsed.mustHaveAllSkills
              ? skillCoverage === 1
                ? 1
                : 0
              : skillCoverage) * 1.5
          : 0.0;

      // Domain matching
      const text = `${e.projects.join(" ")} ${e.skills.join(
        " "
      )}`.toLowerCase();
      const matchedDomains = parsed.domains.filter((d) => text.includes(d));
      const domainScore =
        matchedDomains.length > 0
          ? Math.min(1, matchedDomains.length) * 1.0
          : 0.0;

      // Experience matching
      let expScore = 0;
      if (parsed.minExperience !== undefined) {
        expScore =
          e.experience_years >= parsed.minExperience
            ? 1.0
            : e.experience_years / Math.max(1, parsed.minExperience);
        expScore *= 1.2;
      } else {
        expScore = Math.min(1, e.experience_years / 8) * 0.8;
      }

      // Availability bonus
      const availabilityBonus =
        parsed.availabilityPreferred === "available"
          ? e.availability === "available"
            ? 0.4
            : 0
          : e.availability === "available"
          ? 0.15
          : 0;

      // Combine with semantic similarity
      const score =
        skillScore +
        domainScore +
        expScore +
        availabilityBonus +
        semantic * 0.8;

      // Reasons
      const reasons: string[] = [];
      if (matchedSkills.length)
        reasons.push(`Matches required skills: ${matchedSkills.join(", ")}`);
      if (matchedDomains.length)
        reasons.push(`Relevant domain: ${matchedDomains.join(", ")}`);
      if (parsed.minExperience !== undefined) {
        if (e.experience_years >= parsed.minExperience) {
          reasons.push(
            `Meets experience requirement (${e.experience_years} yrs ≥ ${parsed.minExperience} yrs)`
          );
        } else {
          reasons.push(
            `Near experience requirement (${e.experience_years} yrs, asked ${parsed.minExperience} yrs)`
          );
        }
      } else {
        reasons.push(`Overall experience: ${e.experience_years} yrs`);
      }
      if (e.availability === "available") reasons.push("Currently available");

      return {
        employee: e,
        score,
        matchedSkills,
        matchedDomains,
        reasons,
      };
    })
    .sort((a, b) => b.score - a.score);
}
