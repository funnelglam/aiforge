export type MissionStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface MissionStep {
  id: number;

  title: string;

  status: MissionStatus;

  provider: string;

  result?: string;
}

export interface Mission {

  id: string;

  goal: string;

  workspace: string;

  provider: string;

  complexity: string;

  quality: string;

  steps: MissionStep[];
}