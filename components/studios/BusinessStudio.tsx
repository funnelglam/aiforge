"use client";

import { useState } from "react";

import MissionProgress from "../MissionProgress";

import { createMissionTasks } from "@/lib/missions/createMissionTasks";
import { MissionRunner } from "@/lib/missions/MissionRunner";

import type { Task } from "@/lib/task/types";

type Props = {
  brain: any;
};

const missionRunner = new MissionRunner();

export default function BusinessStudio({
  brain,
}: Props) {
  const [running, setRunning] = useState(false);

  const [tasks, setTasks] = useState<Task[]>(() => {
    if (!brain.mission) {
      return [];
    }

    return createMissionTasks(brain.mission);
  });

  async function startMission() {
    if (!brain.mission || running) {
      return;
    }

    setRunning(true);

    try {
      await missionRunner.runMission(
        brain.mission,
        (updatedTasks) => {
          setTasks(updatedTasks);
        }
      );
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
        disabled={running || !brain.mission}
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {running ? "Running..." : "Start Mission"}
      </button>

      {!brain.mission && (
        <p className="mt-4 text-sm text-red-400">
          No business mission was found.
        </p>
      )}
    </div>
  );
}