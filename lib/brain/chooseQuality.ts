export function chooseQuality(
  complexity: string,
  premium: boolean
) {
  if (premium) return "premium";

  if (complexity === "high") return "balanced";

  return "fast";
}