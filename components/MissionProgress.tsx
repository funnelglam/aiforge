import { ExecutionTask } from "@/lib/executor/types";

type Props = {
  tasks: ExecutionTask[];
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

          <div className="flex justify-between">

            <span>{task.title}</span>

            <span>
              {task.status === "waiting" && "⚪"}
              {task.status === "running" && "🟡"}
              {task.status === "completed" && "✅"}
              {task.status === "failed" && "🔴"}
            </span>

          </div>

          <div className="mt-3 h-2 rounded bg-zinc-800">

            <div
              className={`h-2 rounded transition-all duration-500 ${
                task.status === "completed"
                  ? "w-full bg-green-500"
                  : task.status === "running"
                  ? "w-1/2 bg-yellow-500"
                  : "w-0 bg-zinc-700"
              }`}
            />

          </div>

        </div>

      ))}

    </div>
  );
}