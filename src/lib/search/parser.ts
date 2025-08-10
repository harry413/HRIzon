const SKILL_SYNONYMS: Record<string, string> = {
  ml: "machine learning",
  "machine-learning": "machine learning",
  reactnative: "react native",
  rn: "react native",
  ts: "typescript",
  tf: "tensorflow",
  pytorch: "pytorch",
  cv: "computer vision",
  nlp: "nlp",
  k8s: "kubernetes",
  gcp: "gcp",
  aws: "aws",
  docker: "docker",
  kubernetes: "kubernetes",
  react: "react",
  "react-native": "react native",
  node: "node.js",
  nodejs: "node.js",
  postgres: "postgresql",
  scikit: "scikit-learn",
};

const DOMAIN_KEYWORDS = [
  "healthcare",
  "fintech",
  "e-commerce",
  "ecommerce",
  "logistics",
  "education",
  "retail",
  "banking",
  "payments",
  "telemedicine",
  "manufacturing",
  "cybersecurity",
];

export type ParsedQuery = {
  skills: string[];
  minExperience?: number;
  domains: string[];
  mustHaveAllSkills: boolean;
  availabilityPreferred?: "available";
};

export function parseQuery(input: string): ParsedQuery {
  const text = (input || "").toLowerCase();

  // Extract min experience: e.g., "3+ years", "at least 5 years"
  let minExperience: number | undefined;
  const expRegex = /(\d+)\s*\+?\s*(?:years?|yrs?)/i;
  const expMatch = text.match(expRegex);
  if (expMatch) {
    minExperience = parseInt(expMatch[1], 10);
    if (Number.isNaN(minExperience)) minExperience = undefined;
  }
  if (!minExperience && /\b(senior|lead)\b/.test(text)) {
    minExperience = 5;
  }

  // Extract skills by splitting on non-letters/numbers and normalizing
  const rawTokens = text.split(/[^a-z0-9\+\.\-#]+/i).filter(Boolean);
  const normalizedTokens = rawTokens.map((t) => normalizeSkillToken(t));

  // Heuristic: tokens that are likely skills (in a broad sense)
  const candidateSkills = Array.from(
    new Set(
      normalizedTokens.filter((t) =>
        [
          "python",
          "react",
          "react native",
          "aws",
          "docker",
          "kubernetes",
          "tensorflow",
          "pytorch",
          "scikit-learn",
          "pandas",
          "nlp",
          "computer vision",
          "gcp",
          "azure",
          "node.js",
          "typescript",
          "java",
          "spring",
          "c#",
          ".net",
          "go",
          "rust",
          "devops",
          "ci/cd",
          "terraform",
          "graphql",
          "postgresql",
          "next.js",
          "expo",
          "firebase",
          "airflow",
          "spark",
          "opencv",
          "linux",
          "bash",
          "mobile ci/cd",
          "kotlin",
          "swift",
        ].includes(t)
      )
    )
  );

  // Domains
  const domains = DOMAIN_KEYWORDS.filter((d) => text.includes(d));

  // "both", "and" often suggest intersection
  const mustHaveAllSkills =
    /\bboth\b/.test(text) || /\b(and|with)\b/.test(text);

  // Availability preferences
  const availabilityPreferred = /\bavailable\b/.test(text)
    ? "available"
    : undefined;

  return {
    skills: candidateSkills,
    minExperience,
    domains,
    mustHaveAllSkills,
    availabilityPreferred,
  };
}

function normalizeSkillToken(token: string): string {
  let t = token.toLowerCase();
  t = t.replace(/\s+/g, " ").trim();
  t = t.replace(/^[#@]/, "");
  if (SKILL_SYNONYMS[t]) return SKILL_SYNONYMS[t];
  // common patterns
  if (t === "csharp" || t === "c#") return "c#";
  if (t === ".net" || t === "dotnet") return ".net";
  if (t === "postgres" || t === "postgresql") return "postgresql";
  if (t === "next" || t === "nextjs" || t === "next.js") return "next.js";
  if (t === "expo") return "expo";
  if (t === "ci/cd" || t === "cicd") return "ci/cd";
  return t;
}
