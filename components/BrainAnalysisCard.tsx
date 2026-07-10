"use client";

import { BrainResult } from "@/lib/brain/types";

type Props = {
  result: BrainResult | null;
};

export default function BrainAnalysisPanel({
  result,
}: Props) {
  if (!result) return null;

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-6">

      <h2 className="text-2xl font-bold mb-6">

        🧠 AIForge Brain

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <BrainItem
          title="Intent"
          value={result.intent}
        />

        <BrainItem
          title="Complexity"
          value={result.complexity}
        />

        <BrainItem
          title="Provider"
          value={result.provider}
        />

        <BrainItem
          title="Subscription"
          value={result.subscription}
        />

      </div>

      {result.mission && (

        <>

          <h3 className="text-xl font-bold mt-8">

            {result.mission.icon}{" "}
            {result.mission.title}

          </h3>

          <p className="text-zinc-400 mt-2">

            {result.mission.description}

          </p>

          <div className="mt-6">

            <h4 className="font-semibold">

              Forge Mission

            </h4>

            <ul className="mt-3 space-y-2">

              {result.executionPlan.map(task => (

                <li key={task}>

                  ✅ {task}

                </li>

              ))}

            </ul>

          </div>

        </>

      )}

    </div>
  );
}

function BrainItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-4">

      <p className="text-sm text-zinc-500">

        {title}

      </p>

      <p className="mt-1 font-semibold capitalize">

        {value}

      </p>

    </div>
  );
}