import { Provider } from "@/lib/provider/types";

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

export type Quality =
  | "Fast"
  | "Balanced"
  | "Best";

export type MissionStep = {
  id: number;
  title: string;
  status: "waiting" | "running" | "completed";
  provider: Provider;
};

export type Mission = {
  id: string;
  goal: string;
  workspace: string;
  provider: Provider;
  complexity: Complexity;
  quality: Quality;
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