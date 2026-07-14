"use client";

import { useState } from "react";
import MissionProgress from "../MissionProgress";
import { executeJob } from "@/lib/executor";
import { ExecutionTask } from "@/lib/executor/types";

type Props = {
  brain: any;
};

export default function BusinessStudio({ brain }: Props) {
  const [running, setRunning] = useState(false);

  const [tasks, setTasks] = useState<ExecutionTask[]>(
    brain.tasks.map((task: string, index: number) => ({
      id: index + 1,
      title: task,
      status: "waiting",
    }))
  );

  async function startMission() {
    setRunning(true);

    await executeJob(tasks, (updated) => {
      setTasks(updated);
    });

    setRunning(false);
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
        <MissionProgress
  tasks={tasks}
/>
      </div>

      <button
        onClick={startMission}
        disabled={running}
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3"
      >
        {running ? "Running..." : "Start Mission"}
      </button>

    </div>
  );
}