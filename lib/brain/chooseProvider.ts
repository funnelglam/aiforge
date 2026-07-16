import type { Provider } from "@/lib/provider/types";

import {
  Complexity,
  Intent,
  SubscriptionPlan,
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

  if (complexity === "high") {
    return "openai";
  }

  return "gemini";
}