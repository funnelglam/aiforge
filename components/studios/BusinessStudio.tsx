"use client";

import { useState } from "react";
import MissionProgress from "../MissionProgress";
import { executeJob } from "@/lib/executor";
import type { Task } from "@/lib/task/types";
import type { Provider } from "@/lib/provider/types";

type Props = {
  brain: any;
};

export default function BusinessStudio({
  brain,
}: Props) {
  const [running, setRunning] = useState(false);

  const [tasks, setTasks] = useState<Task[]>(
    brain.tasks.map(
      (title: string, index: number) => ({
        id: String(index + 1),
        title,
        prompt: title,
        type: "business",
        provider: brain.provider as Provider,
        status: "waiting",
      })
    )
  );

  async function startMission() {
    setRunning(true);

    try {
      await executeJob(tasks, (updated) => {
        setTasks(updated);
      });
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      <h2 className="text-3xl font-bold">
        💼 Business Studio
      </h2>

      <p className="mt-4 text-zinc-400">
        AIForge is preparing your business workflow.
      </p>

      <div className="mt-8">
        <MissionProgress tasks={tasks} />
      </div>

      <button
        onClick={startMission}
        disabled={running}
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {running ? "Running..." : "Start Mission"}
      </button>
    </div>
  );
}