"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import ChatWindow from "./ChatWindow";
import PromptBox from "./PromptBox";
import StudioRouter from "./StudioRouter";

import type { Provider } from "@/lib/provider/types";

type Props = {
  goal: string;
};

type Message = {
  role: "user" | "assistant";
  text: string;
};

type ForgeTask = {
  id: string;
  title: string;
  prompt: string;
  worker: string;
  provider?: Provider;
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
  const initialGoalSent = useRef(false);

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [result, setResult] =
    useState<ForgeResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (initialGoalSent.current) {
      return;
    }

    const cleanGoal = goal.trim();

    if (!cleanGoal) {
      setError(
        "Please enter a goal before opening Studio."
      );

      return;
    }

    initialGoalSent.current = true;

    void sendMessage(cleanGoal);
  }, [goal]);

  async function sendMessage(
    text: string
  ) {
    const cleanText = text.trim();

    if (!cleanText || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: cleanText,
    };

    const conversation = [
      ...messages,
      userMessage,
    ];

    setMessages(conversation);
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
            messages: conversation,
          }),
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

      const assistantText =
        createAssistantMessage(data);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: assistantText,
        },
      ]);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "AIForge could not process this request.";

      setError(message);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            `I could not complete that request.\n\n${message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl">
            🧠
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              AIForge Studio
            </h1>

            <p className="text-sm text-zinc-400">
              Ask, reply, refine, and continue.
            </p>
          </div>
        </div>
      </div>

      <ChatWindow messages={messages} />

      {loading && (
        <div className="px-8 pb-6">
          <div className="max-w-3xl animate-pulse rounded-xl bg-zinc-800 p-4 text-zinc-400">
            AIForge is thinking...
          </div>
        </div>
      )}

      {error && (
        <div className="mx-8 mb-6 rounded-xl border border-red-900 bg-red-950/30 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {result?.mode === "mission" &&
        result.mission && (
          <MissionSection
            goal={goal}
            result={result}
          />
        )}

      <PromptBox
        onSend={(text) => {
          void sendMessage(text);
        }}
      />
    </div>
  );
}

function createAssistantMessage(
  result: ForgeResponse
) {
  if (result.mode === "chat") {
    return (
      result.answer ||
      "AIForge returned an empty answer."
    );
  }

  if (
    result.mode === "mission" &&
    result.mission
  ) {
    const tasks =
      result.mission.tasks
        .map(
          (task, index) =>
            `${index + 1}. ${task.title}`
        )
        .join("\n");

    return [
      result.reason ||
        "I created a mission for your request.",
      "",
      `Mission: ${result.mission.title}`,
      "",
      tasks,
    ].join("\n");
  }

  return "AIForge returned an invalid response.";
}

function MissionSection({
  goal,
  result,
}: {
  goal: string;
  result: ForgeResponse;
}) {
  if (!result.mission) {
    return null;
  }

  const provider =
    result.provider ?? "gemini";

  const missionType =
    getMissionType(result.workspace);

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
    <div className="mx-8 mb-8 rounded-2xl border border-violet-800/40 bg-violet-950/20 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-violet-300">
            Mission ready
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {result.mission.title}
          </h2>
        </div>

        <div className="rounded-full bg-zinc-900 px-4 py-2 text-sm capitalize text-zinc-300">
          {result.workspace ?? "general"}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {result.mission.tasks.map(
          (task, index) => (
            <div
              key={task.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <span className="mr-3 text-zinc-500">
                {index + 1}.
              </span>

              {task.title}
            </div>
          )
        )}
      </div>

      <div className="mt-8">
        <StudioRouter brain={brain} />
      </div>
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