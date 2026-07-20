import "server-only";

import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

import { BRAIN_JSON_SCHEMA } from "./schema";
import { BRAIN_SYSTEM_PROMPT } from "./prompt";

import type { BrainResult } from "./types";

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
  "gemini-flash-latest",
] as const;

function createGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new GoogleGenAI({
    apiKey,
  });
}

function createOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new OpenAI({
    apiKey,
  });
}

function getErrorText(error: unknown) {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

function isTemporaryProviderError(
  error: unknown
) {
  const text = getErrorText(error).toLowerCase();

  return (
    text.includes("429") ||
    text.includes("500") ||
    text.includes("502") ||
    text.includes("503") ||
    text.includes("504") ||
    text.includes("unavailable") ||
    text.includes("high demand") ||
    text.includes("overloaded") ||
    text.includes("resource_exhausted") ||
    text.includes("rate limit") ||
    text.includes("timeout")
  );
}

function parseBrainResult(
  output: string,
  provider: "gemini" | "openai"
): BrainResult {
  try {
    const result =
      JSON.parse(output) as BrainResult;

    return {
      ...result,
      provider,
    };
  } catch {
    console.error(
      `[AIForge Brain] Invalid ${provider} JSON:`,
      output
    );

    throw new Error(
      "AIForge received an invalid structured response."
    );
  }
}

async function analyzeWithGemini(
  prompt: string
): Promise<BrainResult> {
  const gemini = createGeminiClient();

  if (!gemini) {
    throw new Error(
      "Gemini is not configured."
    );
  }

  let lastError: unknown;

  for (const model of GEMINI_MODELS) {
    try {
      console.log(
        `[AIForge Brain] Trying Gemini model: ${model}`
      );

      const response =
        await gemini.models.generateContent({
          model,

          contents: prompt,

          config: {
            systemInstruction:
              BRAIN_SYSTEM_PROMPT,

            responseMimeType:
              "application/json",

            responseJsonSchema:
              BRAIN_JSON_SCHEMA,

            temperature: 0.2,

            maxOutputTokens: 2200,
          },
        });

      const output =
        response.text?.trim();

      if (!output) {
        throw new Error(
          `${model} returned an empty response.`
        );
      }

      return parseBrainResult(
        output,
        "gemini"
      );
    } catch (error) {
      lastError = error;

      console.error(
        `[AIForge Brain] Gemini model failed: ${model}`,
        error
      );

      if (!isTemporaryProviderError(error)) {
        break;
      }
    }
  }

  throw (
    lastError ??
    new Error(
      "All Gemini models failed."
    )
  );
}

async function analyzeWithOpenAI(
  prompt: string
): Promise<BrainResult> {
  const openai = createOpenAIClient();

  if (!openai) {
    throw new Error(
      "OpenAI is not configured."
    );
  }

  console.log(
    "[AIForge Brain] Trying OpenAI fallback."
  );

  const response =
    await openai.responses.create({
      model: "gpt-5-mini",

      instructions: `${BRAIN_SYSTEM_PROMPT}

Return valid json only.`,

      input: `Analyze this user request and return valid json only:

${prompt}`,

      text: {
        format: {
          type: "json_object",
        },
      },

      max_output_tokens: 2200,
    });

  const output =
    response.output_text.trim();

  if (!output) {
    throw new Error(
      "OpenAI returned an empty response."
    );
  }

  return parseBrainResult(
    output,
    "openai"
  );
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

  try {
    return await analyzeWithGemini(
      cleanPrompt
    );
  } catch (error) {
    console.error(
      "[AIForge Brain] Gemini fallback chain failed.",
      error
    );
  }

  try {
    return await analyzeWithOpenAI(
      cleanPrompt
    );
  } catch (error) {
    console.error(
      "[AIForge Brain] OpenAI fallback failed.",
      error
    );
  }

  throw new Error(
    "AIForge is temporarily busy. Please send your message again."
  );
}