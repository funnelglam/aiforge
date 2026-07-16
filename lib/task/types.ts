import type { Provider } from "@/lib/provider/types";
import type { WorkerType } from "@/lib/workers/types";

export type TaskStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface Task {
  id: string;
  title: string;
  prompt: string;
  type: WorkerType;
  provider: Provider;
  status: TaskStatus;
}