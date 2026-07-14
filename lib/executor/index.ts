import { ExecutionTask } from "./types";

export async function executeJob(
  tasks: ExecutionTask[],
  onUpdate: (tasks: ExecutionTask[]) => void
) {
  const updated = [...tasks];

  for (let i = 0; i < updated.length; i++) {
    updated[i].status = "running";
    onUpdate([...updated]);

    await new Promise((r) => setTimeout(r, 1000));

    updated[i].status = "completed";
    onUpdate([...updated]);
  }
}