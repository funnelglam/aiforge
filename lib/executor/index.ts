import type { Task } from "@/lib/task/types";
import { getWorker } from "@/lib/workers";

export async function executeJob(
  tasks: Task[],
  onUpdate: (tasks: Task[]) => void
) {
  const updated = tasks.map((task) => ({
    ...task,
  }));

  for (let i = 0; i < updated.length; i++) {
    updated[i] = {
      ...updated[i],
      status: "running",
      output: undefined,
      error: undefined,
    };

    onUpdate(
      updated.map((task) => ({
        ...task,
      }))
    );

    try {
      const worker = getWorker(updated[i].type);

      if (!worker) {
        throw new Error(
          `No worker registered for type: ${updated[i].type}`
        );
      }

      const result = await worker.execute(updated[i]);

      updated[i] = {
        ...updated[i],
        status: result.success
          ? "completed"
          : "failed",
        output: result.output,
        error: result.success
          ? undefined
          : result.output,
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Task execution failed.";

      console.error(
        `Task failed: ${updated[i].title}`,
        error
      );

      updated[i] = {
        ...updated[i],
        status: "failed",
        error: message,
      };
    }

    onUpdate(
      updated.map((task) => ({
        ...task,
      }))
    );
  }
}