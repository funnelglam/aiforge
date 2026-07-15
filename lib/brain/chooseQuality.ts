import { Complexity, Quality } from "./types";

export function chooseQuality(
  complexity: Complexity,
  premium = false
): Quality {

  if (premium) {
    return "Best";
  }

  switch (complexity) {

    case "complex":
      return "Best";

    case "medium":
      return "Balanced";

    case "simple":
    default:
      return "Fast";
  }
}