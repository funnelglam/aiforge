import { NextRequest, NextResponse } from "next/server";

import { analyzePrompt } from "@/lib/brain/v2";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const brain = await analyzePrompt(prompt);

    return NextResponse.json(brain);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Brain failed.",
      },
      {
        status: 500,
      }
    );
  }
}