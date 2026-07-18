import { Provider } from "@/lib/provider/types";

export type BrainMode =
  | "chat"
  | "mission";

export type Workspace =
  | "general"
  | "business"
  | "writing"
  | "image"
  | "video"
  | "website"
  | "research";

export interface BrainTask {
  id: string;

  title: string;

  prompt: string;

  worker: Workspace;

  provider: Provider;
}

export interface BrainMission {
  id: string;

  title: string;

  tasks: BrainTask[];
}

export interface BrainResult {
  mode: BrainMode;

  workspace: Workspace;

  provider: Provider;

  confidence: number;

  reason: string;

  response?: string;

  mission?: BrainMission;
}