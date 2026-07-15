import { AIRequest, AIResponse } from "../types";

export async function generateWithOpenAI(
  request: AIRequest
): Promise<AIResponse> {
  return {
    success: true,
    text: `[OpenAI Placeholder]\n\n${request.prompt}`,
    provider: "openai",
  };
}