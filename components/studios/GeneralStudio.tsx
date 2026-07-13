"use client";

import { useState } from "react";
import { executeJob } from "@/lib/executor";

type Props = {
  brain: any;
};

export default function GeneralStudio({ brain }: Props) {
    const [running, setRunning] = useState(false);
  
  async function handleMission() {
  setRunning(true);
  await executeJob(brain);
  setRunning(false);
}

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

      <button
        onClick={handleMission}
        disabled={running}
        className="mt-6 rounded-xl bg-violet-600 px-6 py-3"
      >
        {running ? "Running..." : "Start Mission"}
      </button>
{brain.tasks.map((task: string) => (
        <div
          key={task}
          className="mt-3 rounded-lg bg-zinc-900 p-4 text-white"
        >
          {task}
        </div>
      ))}
    </div>
  );
}