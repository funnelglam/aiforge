import { executeJob } from "@/lib/executor";
import type { Mission } from "@/lib/brain/types";
import type { Task } from "@/lib/task/types";
import { createMissionTasks } from "./createMissionTasks";

export class MissionRunner {
  async run(
    tasks: Task[],
    onUpdate: (tasks: Task[]) => void
  ) {
    return executeJob(tasks, onUpdate);
  }

  async runMission(
    mission: Mission,
    onUpdate: (tasks: Task[]) => void
  ) {
    const tasks = createMissionTasks(mission);

    return this.run(tasks, onUpdate);
  }
}