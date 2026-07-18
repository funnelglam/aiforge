import OpenAI from "openai";

import { BRAIN_SYSTEM_PROMPT } from "./prompt";
import type { BrainResult } from "./types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzePrompt(
  prompt: string
): Promise<BrainResult> {
  const response = await openai.responses.create({
    model: "gpt-5-mini",

    instructions: BRAIN_SYSTEM_PROMPT,

    input: prompt,

    text: {
      format: {
        type: "json_object",
      },
    },
  });

  const output = response.output_text;

  if (!output) {
    throw new Error(
      "Brain returned an empty response."
    );
  }

  return JSON.parse(output) as BrainResult;
}