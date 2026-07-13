export type ProviderName = "gemini" | "openai";

export interface ProviderRequest {
  prompt: string;
}

export interface ProviderResponse {
  text: string;
}

export interface AIProvider {
  name: ProviderName;

  generate(
    request: ProviderRequest
  ): Promise<ProviderResponse>;
}