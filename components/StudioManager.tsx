"use client";

import { useEffect, useState } from "react";

import StudioRouter from "./StudioRouter";

import type { Provider } from "@/lib/provider/types";

type Props = {
  goal: string;
};

type ForgeTask = {
  id: string;
  title: string;
  prompt: string;
  worker: string;
  provider: Provider;
};

type ForgeMission = {
  id: string;
  title: string;
  tasks: ForgeTask[];
};

type ForgeResponse = {
  success: boolean;
  mode?: "chat" | "mission";
  workspace?: string;
  provider?: Provider;
  confidence?: number;
  reason?: string;
  answer?: string | null;
  mission?: ForgeMission | null;
  error?: string;
};

export default function StudioManager({
  goal,
}: Props) {
  const [result, setResult] =
    useState<ForgeResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function forgeGoal() {
      const prompt = goal.trim();

      if (!prompt) {
        setResult(null);
        setError(
          "Please enter a goal before opening Studio."
        );
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setResult(null);

      try {
        const response = await fetch(
          "/api/forge",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              prompt,
            }),

            signal: controller.signal,
          }
        );

        const data =
          (await response.json()) as ForgeResponse;

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              "AIForge could not process this request."
          );
        }

        setResult(data);
      } catch (requestError) {
        if (
          requestError instanceof Error &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "AIForge could not process this request."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void forgeGoal();

    return () => {
      controller.abort();
    };
  }, [goal]);

  if (loading) {
    return (
      <div className="mt-6 rounded-2xl border border-violet-700/30 bg-gradient-to-r from-violet-950/40 to-zinc-900 p-8">
        <div className="flex items-center gap-4">
          <div className="animate-pulse text-3xl">
            🧠
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              AIForge Brain
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Understanding your request...
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-2xl border border-red-900 bg-red-950/20 p-8">
        <h2 className="text-2xl font-bold text-red-300">
          AIForge could not complete the request
        </h2>

        <p className="mt-4 whitespace-pre-wrap text-red-200">
          {error}
        </p>

        <div className="mt-6 rounded-xl bg-black/40 p-4">
          <p className="text-sm text-zinc-500">
            Your Goal
          </p>

          <p className="mt-2 text-white">
            {goal}
          </p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  if (result.mode === "chat") {
    return (
      <div className="mt-6 rounded-2xl border border-violet-700/30 bg-gradient-to-r from-violet-950/40 to-zinc-900 p-8">
        <BrainHeader
          subtitle="Answer generated"
        />

        <BrainSummary
          result={result}
        />

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm font-medium text-violet-300">
            AIForge
          </p>

          <div className="mt-4 whitespace-pre-wrap leading-8 text-zinc-200">
            {result.answer ||
              "AIForge returned an empty answer."}
          </div>
        </div>

        <GoalCard goal={goal} />
      </div>
    );
  }

  if (
    result.mode === "mission" &&
    result.mission
  ) {
    const missionType =
      getMissionType(result.workspace);

    const provider =
      result.provider ?? "gemini";

    /*
      Compatibility object for the existing
      StudioRouter and Studio components.

      No existing names are changed.
    */
    const brain = {
      prompt: goal,

      narrator:
        result.reason ||
        "AIForge created an execution plan for your goal.",

      missionType,

      complexity: "medium",

      quality: "Balanced",

      provider,

      confidence:
        result.confidence ?? 0,

      tasks:
        result.mission.tasks.map(
          (task) => task.title
        ),

      executionPlan:
        result.mission.tasks.map(
          (task) => task.title
        ),

      mission: {
        id: result.mission.id,

        goal: result.mission.title,

        workspace:
          result.workspace ?? "general",

        provider,

        complexity: "medium",

        quality: "Balanced",

        steps:
          result.mission.tasks.map(
            (task, index) => ({
              id: index + 1,

              title: task.title,

              status: "waiting" as const,

              provider:
                task.provider ?? provider,
            })
          ),
      },
    };

    return (
      <div className="mt-6 rounded-2xl border border-violet-700/30 bg-gradient-to-r from-violet-950/40 to-zinc-900 p-6">
        <BrainHeader
          subtitle="Mission ready"
        />

        <div className="mt-8 leading-8 text-zinc-300">
          <p>{brain.narrator}</p>
        </div>

        <BrainSummary
          result={result}
        />

        <GoalCard goal={goal} />

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">
            Execution Plan
          </h3>

          <div className="mt-5 space-y-3">
            {result.mission.tasks.map(
              (task) => (
                <div
                  key={task.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span>{task.title}</span>

                    <span className="shrink-0 text-yellow-400">
                      Pending
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-12">
          <StudioRouter brain={brain} />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-red-900 bg-red-950/20 p-8">
      <h2 className="text-2xl font-bold text-red-300">
        Invalid AIForge response
      </h2>

      <p className="mt-4 text-red-200">
        AIForge did not return an answer or a
        mission.
      </p>
    </div>
  );
}

function getMissionType(
  workspace?: string
) {
  switch (workspace) {
    case "business":
      return "business";

    case "video":
      return "video";

    case "image":
      return "brand";

    default:
      return "general";
  }
}

function BrainHeader({
  subtitle,
}: {
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-3xl">🧠</div>

      <div>
        <h2 className="text-2xl font-bold">
          AIForge Brain
        </h2>

        <p className="text-sm text-zinc-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function BrainSummary({
  result,
}: {
  result: ForgeResponse;
}) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <InfoCard title="Mode">
        {result.mode ?? "unknown"}
      </InfoCard>

      <InfoCard title="Studio">
        {result.workspace ?? "general"}
      </InfoCard>

      <InfoCard title="Provider">
        {result.provider ?? "unknown"}
      </InfoCard>

      <InfoCard title="Confidence">
        {Math.round(
          (result.confidence ?? 0) * 100
        )}
        %
      </InfoCard>
    </div>
  );
}

function GoalCard({
  goal,
}: {
  goal: string;
}) {
  return (
    <div className="mt-8 rounded-xl bg-zinc-900 p-5">
      <p className="text-sm text-zinc-500">
        Your Goal
      </p>

      <p className="mt-2 text-lg font-medium text-white">
        {goal}
      </p>
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

      <div className="mt-2 text-xl font-bold capitalize text-white">
        {children}
      </div>
    </div>
  );
}

function LoadingBar() {
  return (
    <div className="h-14 animate-pulse rounded-xl bg-zinc-900" />
  );
}