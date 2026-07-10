export type ForgeJob = {
  goal: string;

  type:
    | "business"
    | "image"
    | "video"
    | "writing"
    | "coding"
    | "design"
    | "marketing"
    | "research"
    | "general";

  confidence: number;

  complexity: "low" | "medium" | "high";

  quality: "fast" | "balanced" | "premium";

  tasks: ForgeTask[];
};

export type ForgeTask = {
  title: string;
  status:
    | "queued"
    | "planning"
    | "running"
    | "reviewing"
    | "complete";
};