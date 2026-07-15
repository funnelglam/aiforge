import { AIRequest, AIResponse } from "../types";

export async function generateWithGemini(
  request: AIRequest
): Promise<AIResponse> {
  return {
    success: true,
    text: `[Gemini Placeholder]\n\n${request.prompt}`,
    provider: "gemini",
  };
}