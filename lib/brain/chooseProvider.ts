import {
  Complexity,
  Provider,
  SubscriptionPlan,
  Intent,
} from "./types";

export function chooseProvider(
  intent: Intent,
  complexity: Complexity,
  plan: SubscriptionPlan
): Provider {

  if (intent === "image") {
    return "image";
  }

  if (intent === "video") {
    return "video";
  }

  if (plan === "free") {
    return "gemini";
  }

  if (complexity === "complex") {
    return "openai";
  }

  return "gemini";
}