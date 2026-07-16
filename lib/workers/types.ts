import { Task } from "@/lib/task/types";
import { Provider } from "@/lib/provider/types";

export type WorkerType =
  | "business"
  | "image"
  | "video"
  | "writing"
  | "website"
  | "research";

export interface WorkerResult {
  success: boolean;

  output: string;

  provider: Provider;
}

export interface Worker {
  type: WorkerType;

  execute(task: Task): Promise<WorkerResult>;
}