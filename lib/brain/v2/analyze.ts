import "server-only";

import { GoogleGenAI } from "@google/genai";

import { BRAIN_JSON_SCHEMA } from "./schema";
import { BRAIN_SYSTEM_PROMPT } from "./prompt";

import type { BrainResult } from "./types";

function createGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is missing from .env.local."
    );
  }

  return new GoogleGenAI({
    apiKey,
  });
}

export async function analyzePrompt(
  prompt: string
): Promise<BrainResult> {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    throw new Error("A prompt is required.");
  }

  const gemini = createGeminiClient();

  const response =
    await gemini.models.generateContent({
      model: "gemini-3.5-flash",

      contents: cleanPrompt,

      config: {
        systemInstruction:
          BRAIN_SYSTEM_PROMPT,

        responseMimeType:
          "application/json",

        responseJsonSchema:
          BRAIN_JSON_SCHEMA,

        temperature: 0.2,

        maxOutputTokens: 4000,
      },
    });

  const output = response.text?.trim();

  if (!output) {
    throw new Error(
      "AIForge Brain returned an empty response."
    );
  }

  try {
    const result =
      JSON.parse(output) as BrainResult;

    return {
      ...result,

      // Gemini is currently powering
      // the development Brain.
      provider: "gemini",
    };
  } catch {
    console.error(
      "Invalid Gemini Brain JSON:",
      output
    );

    throw new Error(
      "AIForge Brain returned invalid JSON."
    );
  }
}