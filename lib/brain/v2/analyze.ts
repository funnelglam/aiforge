import "server-only";

import OpenAI from "openai";

import { BRAIN_SYSTEM_PROMPT } from "./prompt";
import type { BrainResult } from "./types";

function createOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is missing from .env.local."
    );
  }

  return new OpenAI({
    apiKey,
  });
}

export async function analyzePrompt(
  prompt: string
): Promise<BrainResult> {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    throw new Error(
      "A prompt is required."
    );
  }

  const openai = createOpenAIClient();

  const response =
    await openai.responses.create({
      model: "gpt-5-mini",

      instructions: `${BRAIN_SYSTEM_PROMPT}

Return the result as valid json only.`,

      input: `Analyze the following user request and return valid json only:

${cleanPrompt}`,

      text: {
        format: {
          type: "json_object",
        },
      },
    });

  const output =
    response.output_text.trim();

  if (!output) {
    throw new Error(
      "AIForge Brain returned an empty response."
    );
  }

  try {
    return JSON.parse(output) as BrainResult;
  } catch {
    console.error(
      "Invalid Brain JSON:",
      output
    );

    throw new Error(
      "AIForge Brain returned invalid JSON."
    );
  }
}