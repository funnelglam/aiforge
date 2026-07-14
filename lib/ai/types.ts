export type AIProvider =
  | "openai"
  | "gemini"
  | "claude";

export interface AIRequest {
  provider: AIProvider;
  prompt: string;
}

export interface AIResponse {
  success: boolean;
  text: string;
}