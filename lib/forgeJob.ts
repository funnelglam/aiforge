export type ForgeJobStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface ForgeJob {
  id: string;

  goal: string;

  missionType: string;

  provider: string;

  quality: string;

  tasks: string[];

  currentTask: number;

  progress: number;

  status: ForgeJobStatus;
}

export function createForgeJob(brain: any): ForgeJob {
  return {
    id: crypto.randomUUID(),

    goal: brain.prompt,

    missionType: brain.missionType,

    provider: brain.provider,

    quality: brain.quality,

    tasks: brain.tasks,

    currentTask: 0,

    progress: 0,

    status: "waiting",
  };
}