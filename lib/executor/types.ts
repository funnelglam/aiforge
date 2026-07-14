export type TaskStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface ExecutionTask {
  id: number;
  title: string;
  status: TaskStatus;
}

export interface ExecutionState {
  tasks: ExecutionTask[];
}