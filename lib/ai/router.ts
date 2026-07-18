import type { AIRequest, AIResponse } from "./types";

import { generateWithGemini } from "./providers/gemini";
import { generateWithOpenAI } from "./providers/openai";

export async function generateAI(
  request: AIRequest
): Promise<AIResponse> {
  switch (request.provider) {
    case "gemini":
      return generateWithGemini(request);

    case "openai":
      return generateWithOpenAI(request);

    default:
      return generateWithOpenAI({
        ...request,
        provider: "openai",
      });
  }
}