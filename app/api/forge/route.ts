import { NextResponse } from "next/server";

import { analyzePrompt } from "@/lib/brain/v2";

export const runtime = "nodejs";

type ForgeRequestBody = {
  prompt?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ForgeRequestBody;

    const prompt =
      typeof body.prompt === "string"
        ? body.prompt.trim()
        : "";

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

    const brain = await analyzePrompt(prompt);

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
    console.error("Forge API error:", error);

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