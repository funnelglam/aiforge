import { Complexity } from "./types";

export function analyzeComplexity(
  prompt: string
): Complexity {
  const words = prompt.trim().split(/\s+/).length;

if (words < 10) {
  return "low";
}

if (words < 40) {
  return "medium";
}

return "high";
}