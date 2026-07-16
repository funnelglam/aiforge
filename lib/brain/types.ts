export type SubscriptionPlan =
  | "free"
  | "creator"
  | "pro"
  | "business";

export type Complexity =
  | "low"
  | "medium"
  | "high";

export type Intent =
  | "business"
  | "marketing"
  | "image"
  | "video"
  | "writing"
  | "website"
  | "app"
  | "general";

export type Provider =
  | "gemini"
  | "openai"
  | "groq"
  | "image"
  | "video";

export type Quality =
  | "Fast"
  | "Balanced"
  | "Best";

export type MissionStep = {
  id: number;
  title: string;
  status: "waiting" | "running" | "completed" | "failed";
  provider: string;
};

export type Mission = {
  id: string;
  goal: string;
  workspace: string;
  provider: string;
  complexity: string;
  quality: string;
  steps: MissionStep[];
};

export type BrainResult = {
  prompt: string;
  intent: Intent;
  mission?: Mission;
  complexity: Complexity;
  subscription: SubscriptionPlan;
  provider: Provider;
  executionPlan: string[];
};