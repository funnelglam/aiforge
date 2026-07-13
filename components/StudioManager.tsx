"use client";

import { createForgeJob } from "@/lib/forgeJob";
import { analyzePrompt } from "@/lib/brain";
import StudioRouter from "./StudioRouter";

type Props = {
  goal: string;
};

export default function StudioManager({ goal }: Props) {
 const brain = analyzePrompt(goal);
const job = createForgeJob(brain);

  return (
    <div className="mt-6 rounded-2xl border border-violet-700/30 bg-gradient-to-r from-violet-950/40 to-zinc-900 p-6">

      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="text-3xl">🧠</div>

        <div>
          <h2 className="text-2xl font-bold">
            AIForge Brain
          </h2>

          <p className="text-zinc-400 text-sm">
            Mission Analysis Complete
          </p>
        </div>
      </div>

      {/* Brain Narration */}

      <div className="mt-8 space-y-5 leading-8 text-zinc-300">
        <p>{brain.narrator}</p>
      </div>

      {/* Thinking Steps */}

      <div className="mt-8 space-y-3">

        <ThinkingItem
          done
          text="Goal understood"
        />

        <ThinkingItem
          done
          text="Mission classified"
        />

        <ThinkingItem
          done
          text="Workflow generated"
        />

        <ThinkingItem
          done
          text="Ready to begin"
        />

      </div>

      {/* Analysis Cards */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">

        <InfoCard title="Mission">
          {brain.missionType}
        </InfoCard>

        <InfoCard title="Confidence">
          98%
        </InfoCard>

        <InfoCard title="Complexity">
          {brain.complexity}
        </InfoCard>

        <InfoCard title="Execution Quality">
          {brain.quality}
        </InfoCard>

      </div>
<div className="mt-8 rounded-xl bg-zinc-900 p-5">
  <p className="text-zinc-500">Forge Job</p>

  <pre className="mt-3 overflow-auto text-sm">
    {JSON.stringify(job, null, 2)}
  </pre>
</div>

      {/* Original Goal */}

      <div className="mt-10 rounded-xl bg-zinc-900 p-5">
        <p className="text-sm text-zinc-500">
          Your Goal
        </p>

        <p className="mt-2 text-lg font-medium text-white">
          {goal}
        </p>
      </div>

      {/* Tasks */}

      <div className="mt-10">

        <h3 className="text-2xl font-semibold">
          Execution Plan
        </h3>

        <div className="mt-5 space-y-3">

          {brain.tasks.map((task) => (
            <div
              key={task}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex items-center justify-between">

                <span>{task}</span>

                <span className="text-yellow-400">
                  Pending
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="mt-12">
  <StudioRouter brain={brain} />
</div>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-5">

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-white">
        {children}
      </p>

    </div>
  );
}

function ThinkingItem({
  done,
  text,
}: {
  done: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="text-xl">
        {done ? "✅" : "🟣"}
      </div>

      <span className="text-zinc-300">
        {text}
      </span>

    </div>
  );
}