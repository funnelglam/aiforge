"use client";

type Props = {
  brain: any;
};

export default function GeneralStudio({ brain }: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        General Studio
      </h2>

      <p className="mt-2 text-zinc-400">
        No specialized studio matched this mission.
      </p>

      <div className="mt-6 space-y-3">
        {brain.tasks.map((task: string) => (
          <div
            key={task}
            className="rounded-lg bg-zinc-800 p-4"
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}