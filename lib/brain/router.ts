import { ProviderName } from "@/lib/providers/types";

export type MissionType =
  | "business"
  | "image"
  | "video"
  | "writing"
  | "coding"
  | "design"
  | "marketing"
  | "research"
  | "general";

export interface RoutingContext {
  missionType: MissionType;
  complexity: "Easy" | "Medium" | "Advanced";
  premium: boolean;
}

export function chooseBestProvider(
  context: RoutingContext
): ProviderName {

  const { missionType, complexity, premium } = context;

  // Premium users get highest quality
  if (premium) {
    return "openai";
  }

  // Images
  if (missionType === "image") {
    return "openai";
  }

  // Videos (temporary until we add a video provider)
  if (missionType === "video") {
    return "openai";
  }

  // Advanced reasoning
  if (complexity === "Advanced") {
    return "openai";
  }

  // Everything else
  return "gemini";
}