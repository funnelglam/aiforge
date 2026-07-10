export function analyzeComplexity(prompt: string) {
  const words = prompt.trim().split(/\s+/).length;

  if (words < 10) return "low";
  if (words < 40) return "medium";

  return "high";
}