type Props = {
  tasks: string[];
  currentTask: number;
};

export default function MissionProgress({
  tasks,
  currentTask,
}: Props) {
  return (
    <div className="space-y-4">

      {tasks.map((task, index) => {

        const done = index < currentTask;
        const running = index === currentTask;

        return (
          <div
            key={task}
            className="rounded-xl bg-zinc-900 p-4"
          >

            <div className="flex justify-between">

              <span>{task}</span>

              <span>

                {done
                  ? "✅"
                  : running
                  ? "🟡"
                  : "⚪"}

              </span>

            </div>

            <div className="mt-3 h-2 rounded bg-zinc-800">

              <div
                className={`h-2 rounded transition-all duration-500 ${
                  done
                    ? "w-full bg-green-500"
                    : running
                    ? "w-1/2 bg-yellow-500"
                    : "w-0 bg-zinc-700"
                }`}
              />

            </div>

          </div>
        );
      })}
    </div>
  );
}