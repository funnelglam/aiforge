import { executeJob } from "@/lib/executor";
import type { Task } from "@/lib/task/types";

export class MissionRunner {
  async run(
    tasks: Task[],
    onUpdate: (tasks: Task[]) => void
  ) {
    return executeJob(tasks, onUpdate);
  }
}