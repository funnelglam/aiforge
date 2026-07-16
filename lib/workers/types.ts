export type WorkerType =
  | "business"
  | "image"
  | "video"
  | "writing"
  | "website"
  | "research";

export interface WorkerTask {
  id: string;

  title: string;

  prompt: string;

  provider: string;
}

export interface WorkerResult {
  success: boolean;

  output: string;

  provider: string;
}

export interface Worker {
  type: WorkerType;

  execute(
    task: WorkerTask
  ): Promise<WorkerResult>;
}