"use client";

import { useState } from "react";

import { MissionRunner } from "@/lib/missions/MissionRunner";
import { detectWorker } from "@/lib/workers/detectWorker";

import type { Provider } from "@/lib/provider/types";
import type { Task } from "@/lib/task/types";

type Props = {
  brain: any;
};

const missionRunner = new MissionRunner();

export default function GeneralStudio({
  brain,
}: Props) {
  const [running, setRunning] = useState(false);

  const [tasks, setTasks] = useState<Task[]>(() =>
    brain.tasks.map(
      (title: string, index: number) => ({
        id: String(index + 1),
        title,
        prompt: title,
        type: detectWorker(title),
        provider: brain.provider as Provider,
        status: "waiting",
      })
    )
  );

  async function handleMission() {
    if (running || tasks.length === 0) {
      return;
    }

    setRunning(true);

    try {
      await missionRunner.run(
        tasks,
        (updatedTasks) => {
          setTasks(updatedTasks);
        }
      );
    } finally {
      setRunning(false);
    }
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
            className="flex justify-between rounded-lg bg-zinc-800 p-4"
          >
            <span>{task.title}</span>

            <span>
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
        ))}
      </div>

      <button
        onClick={handleMission}
        disabled={running || tasks.length === 0}
        className="mt-6 rounded-xl bg-violet-600 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {running ? "Running..." : "Start Mission"}
      </button>

      {tasks.length === 0 && (
        <p className="mt-4 text-sm text-zinc-500">
        AIForge could not create an execution plan for this request.
        </p>
      )}
    </div>
  );
}