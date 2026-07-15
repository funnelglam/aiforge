export type AIProvider =
  | "openai"
  | "gemini"
  | "claude";

export interface AIRequest {
  prompt: string;

  provider?: AIProvider;

  systemPrompt?: string;

  temperature?: number;

  maxTokens?: number;
}

export interface AIResponse {
  success: boolean;

  text: string;

  provider: AIProvider;
}