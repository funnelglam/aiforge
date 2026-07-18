import "server-only";

import OpenAI from "openai";

import type {
  AIRequest,
  AIResponse,
} from "../types";

function createOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is missing from .env.local."
    );
  }

  return new OpenAI({ apiKey });
}

export async function generateWithOpenAI(
  request: AIRequest
): Promise<AIResponse> {
  try {
    const openai = createOpenAIClient();

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions:
        request.systemPrompt ??
        "You are an AI worker inside AIForge. Complete the requested task clearly and practically.",
      input: request.prompt,
      max_output_tokens: request.maxTokens ?? 800,
    });

    return {
      success: true,
      text:
        response.output_text.trim() ||
        "OpenAI returned an empty response.",
      provider: "openai",
    };
  } catch (error) {
    console.error("OpenAI provider error:", error);

    return {
      success: false,
      text:
        error instanceof Error
          ? error.message
          : "OpenAI request failed.",
      provider: "openai",
    };
  }
}