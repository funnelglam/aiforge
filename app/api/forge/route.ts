import { NextResponse } from "next/server";

import { analyzePrompt } from "@/lib/brain/v2";

export const runtime = "nodejs";

type ForgeMessage = {
  role: "user" | "assistant";
  text: string;
};

type ForgeRequestBody = {
  prompt?: unknown;
  messages?: unknown;
};

function isForgeMessage(
  value: unknown
): value is ForgeMessage {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const message =
    value as Record<string, unknown>;

  return (
    (message.role === "user" ||
      message.role === "assistant") &&
    typeof message.text === "string"
  );
}

function createConversationPrompt(
  messages: ForgeMessage[]
) {
  const transcript = messages
    .map((message) => {
      const speaker =
        message.role === "user"
          ? "USER"
          : "AIFORGE";

      return `${speaker}:\n${message.text}`;
    })
    .join("\n\n");

  return `
You are continuing an existing AIForge conversation.

Use the complete conversation history below to understand references, follow-up instructions, corrections, and context.

Respond primarily to the latest USER message.

Do not repeat earlier answers unless the latest user request requires it.

CONVERSATION HISTORY:

${transcript}
`.trim();
}

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as ForgeRequestBody;

    const messages =
      Array.isArray(body.messages)
        ? body.messages.filter(isForgeMessage)
        : [];

    const standalonePrompt =
      typeof body.prompt === "string"
        ? body.prompt.trim()
        : "";

    const prompt =
      messages.length > 0
        ? createConversationPrompt(messages)
        : standalonePrompt;

    if (!prompt) {
      return NextResponse.json(
        {
          success: false,
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const brain =
      await analyzePrompt(prompt);

    if (brain.mode === "chat") {
      return NextResponse.json({
        success: true,
        mode: brain.mode,
        workspace: brain.workspace,
        provider: brain.provider,
        confidence: brain.confidence,
        reason: brain.reason,
        answer:
          brain.response ??
          "AIForge returned an empty answer.",
        mission: null,
      });
    }

    if (!brain.mission) {
      return NextResponse.json(
        {
          success: false,
          error:
            "AIForge selected mission mode but did not create a mission.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      mode: brain.mode,
      workspace: brain.workspace,
      provider: brain.provider,
      confidence: brain.confidence,
      reason: brain.reason,
      answer: null,
      mission: brain.mission,
    });
  } catch (error) {
    console.error(
      "Forge API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "AIForge could not process the request.",
      },
      {
        status: 500,
      }
    );
  }
}