import { AIRequest } from "./types";

import { generateWithOpenAI } from "./providers/openai";
import { generateWithGemini } from "./providers/gemini";

export async function generateAI(
  request: AIRequest
) {
  switch (request.provider) {
    case "openai":
      return generateWithOpenAI(request);

    case "gemini":
      return generateWithGemini(request);

    default:
      return generateWithOpenAI(request);
  }
}