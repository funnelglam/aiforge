import "server-only";

import { GoogleGenAI } from "@google/genai";

import type {
  AIRequest,
  AIResponse,
} from "../types";

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

export async function generateWithGemini(
  request: AIRequest
): Promise<AIResponse> {
  try {
    const gemini = createGeminiClient();

    const response =
      await gemini.models.generateContent({
        model: "gemini-2.5-flash",

        contents: request.prompt,

        config: {
          systemInstruction:
            request.systemPrompt ??
            "You are an AI worker inside AIForge. Complete the user's request clearly, accurately, and practically.",

          temperature:
            request.temperature ?? 0.7,

          maxOutputTokens:
            request.maxTokens ?? 1200,
        },
      });

    const text = response.text?.trim();

    return {
      success: Boolean(text),

      text:
        text ||
        "Gemini returned an empty response.",

      provider: "gemini",
    };
  } catch (error) {
    console.error(
      "Gemini provider error:",
      error
    );

    return {
      success: false,

      text:
        error instanceof Error
          ? error.message
          : "Gemini request failed.",

      provider: "gemini",
    };
  }
}