import type { Task } from "@/lib/task/types";

type Props = {
  tasks: Task[];
};

export default function MissionProgress({
  tasks,
}: Props) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="rounded-xl bg-zinc-900 p-4"
        >
          <div className="flex justify-between gap-4">
            <span>{task.title}</span>

            <span className="shrink-0">
              {task.status === "waiting" &&
                "⚪ Waiting"}

              {task.status === "running" &&
                "🟡 Running"}

              {task.status === "completed" &&
                "✅ Completed"}

              {task.status === "failed" &&
                "🔴 Failed"}
            </span>
          </div>

          <div className="mt-3 h-2 rounded bg-zinc-800">
            <div
              className={`h-2 rounded transition-all duration-500 ${
                task.status === "completed"
                  ? "w-full bg-green-500"
                  : task.status === "running"
                    ? "w-1/2 bg-yellow-500"
                    : task.status === "failed"
                      ? "w-full bg-red-500"
                      : "w-0 bg-zinc-700"
              }`}
            />
          </div>

          {task.output && (
            <div className="mt-4 whitespace-pre-wrap rounded-lg border border-zinc-700 bg-black p-4 text-sm leading-6 text-zinc-300">
              {task.output}
            </div>
          )}

          {task.error &&
            task.error !== task.output && (
              <div className="mt-4 whitespace-pre-wrap rounded-lg border border-red-900 bg-red-950/30 p-4 text-sm text-red-300">
                {task.error}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}