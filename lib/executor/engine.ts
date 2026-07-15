import { ExecutionTask } from "./types";

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function executeJob(
  tasks: ExecutionTask[],
  onUpdate: (tasks: ExecutionTask[]) => void
) {
  const updated = [...tasks];

  for (let i = 0; i < updated.length; i++) {

    updated[i].status = "running";
    onUpdate([...updated]);

    await wait(1200);

    updated[i].status = "completed";
    onUpdate([...updated]);
  }

  return updated;
}