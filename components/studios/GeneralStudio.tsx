"use client";

import { useState } from "react";
import { executeJob } from "@/lib/executor";
import {
  ExecutionTask,
} from "@/lib/executor/types";

type Props = {
  brain: any;
};

export default function GeneralStudio({ brain }: Props) {
    const [running, setRunning] = useState(false);

const [tasks, setTasks] = useState<ExecutionTask[]>(
  brain.tasks.map((task: string, index: number) => ({
    id: index + 1,
    title: task,
    status: "waiting",
  }))
);

async function handleMission() {
  setRunning(true);

  await executeJob(tasks, (updatedTasks) => {
    setTasks(updatedTasks);
  });

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
  {tasks.map((task) => (
    <div
      key={task.id}
      className="rounded-lg bg-zinc-800 p-4 flex justify-between"
    >
      <span>{task.title}</span>

      <span>
  {task.status === "waiting" && "⚪ Waiting"}
  {task.status === "running" && "🟡 Running"}
  {task.status === "completed" && "✅ Completed"}
  {task.status === "failed" && "🔴 Failed"}
</span>
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
    </div>
  );
}