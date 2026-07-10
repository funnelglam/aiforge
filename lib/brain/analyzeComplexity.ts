import { Complexity } from "./types";

export function analyzeComplexity(
  prompt: string
): Complexity {

  const words =
    prompt.trim().split(/\s+/).length;

  if (words < 20) {
    return "simple";
  }

  if (words < 80) {
    return "medium";
  }

  return "complex";
}