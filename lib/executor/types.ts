import { Task } from "@/lib/task/types";

export type TaskStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface ExecutionState {
  tasks: Task[];
}