import { Complexity, Quality } from "./types";

export function chooseQuality(
  complexity: Complexity,
  premium = false
): Quality {
  if (premium) {
    return "Best";
  }

  switch (complexity) {
    case "high":
      return "Best";

    case "medium":
      return "Balanced";

    case "low":
    default:
      return "Fast";
  }
}