import type { Employee } from "@/lib/data/employees";

// Simple bag-of-words embedding with L2 normalization
export function embed(text: string, vocab: Map<string, number>): Float32Array {
  const vec = new Float32Array(vocab.size);
  const tokens = tokenize(text);
  for (const tok of tokens) {
    const i = vocab.get(tok);
    if (i !== undefined) vec[i] += 1;
  }
  // tf-idf could be added; keep simple for now
  // normalize
  let norm = 0;
  for (let i = 0; i < vec.length; i++) norm += vec[i] * vec[i];
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < vec.length; i++) vec[i] /= norm;
  return vec;
}

export function cosine(a: Float32Array, b: Float32Array): number {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

export function buildVocab(employees: Employee[]): Map<string, number> {
  const set = new Set<string>();
  for (const e of employees) {
    for (const s of e.skills) set.add(clean(s));
    for (const p of e.projects) tokenize(p).forEach((t) => set.add(t));
  }
  // Also seed common domain terms
  [
    "healthcare",
    "fintech",
    "e-commerce",
    "education",
    "retail",
    "logistics",
    "banking",
    "payments",
    "telemedicine",
    "manufacturing",
    "cybersecurity",
  ].forEach((t) => set.add(t));
  const map = new Map<string, number>();
  let idx = 0;
  for (const t of Array.from(set)) map.set(t, idx++);
  return map;
}

export function employeeDoc(e: Employee): string {
  return `${e.name} ${e.skills.join(" ")} ${e.projects.join(" ")} ${
    e.availability
  } ${e.experience_years} years`;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9\+\.#]+/i)
    .filter(Boolean)
    .map(clean);
}

function clean(t: string) {
  return t.toLowerCase().replace(/^[#@]/, "").replace(/\.$/, "");
}
