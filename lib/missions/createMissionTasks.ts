import type { Mission } from "@/lib/brain/types";
import type { Task } from "@/lib/task/types";
import { detectWorker } from "@/lib/workers/detectWorker";

export function createMissionTasks(
  mission: Mission
): Task[] {
  return mission.steps.map((step) => ({
    id: String(step.id),
    title: step.title,
    prompt: step.title,
    type: detectWorker(step.title),
    provider: step.provider,
    status: step.status,
  }));
}