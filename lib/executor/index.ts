import type { Task } from "@/lib/task/types";
import { getWorker } from "@/lib/workers";

export async function executeJob(
  tasks: Task[],
  onUpdate: (tasks: Task[]) => void
) {
  const updated = tasks.map((task) => ({ ...task }));

  for (let i = 0; i < updated.length; i++) {
    updated[i].status = "running";
    onUpdate(updated.map((task) => ({ ...task })));

    try {
      const worker = getWorker(updated[i].type);

      if (!worker) {
        throw new Error(
          `No worker registered for type: ${updated[i].type}`
        );
      }

      await worker.execute(updated[i]);

      updated[i].status = "completed";
    } catch (error) {
      console.error(
        `Task failed: ${updated[i].title}`,
        error
      );

      updated[i].status = "failed";
    }

    onUpdate(updated.map((task) => ({ ...task })));
  }
}