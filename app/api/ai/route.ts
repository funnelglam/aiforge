import { NextResponse } from "next/server";

import { generateAI } from "@/lib/ai/router";
import type { AIRequest } from "@/lib/ai/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequest;

    if (!body.prompt?.trim()) {
      return NextResponse.json(
        {
          success: false,
          text: "A prompt is required.",
          provider: body.provider ?? "openai",
        },
        { status: 400 }
      );
    }

    const result = await generateAI(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI API route error:", error);

    return NextResponse.json(
      {
        success: false,
        text:
          error instanceof Error
            ? error.message
            : "The AI request failed.",
        provider: "openai",
      },
      { status: 500 }
    );
  }
}