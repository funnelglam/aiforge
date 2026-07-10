export type SubscriptionPlan =
  | "free"
  | "creator"
  | "pro"
  | "business";

export type Complexity =
  | "simple"
  | "medium"
  | "complex";

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

export type Mission = {
  id: string;
  title: string;
  icon: string;
  description: string;
  tasks: string[];
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