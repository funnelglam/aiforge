import {
  AIProvider,
  ProviderRequest,
  ProviderResponse,
} from "./types";

export const openAIProvider: AIProvider = {
  name: "openai",

  async generate(
    request: ProviderRequest
  ): Promise<ProviderResponse> {

    return {
      text:
        "OpenAI Provider (Mock): " +
        request.prompt,
    };
  },
};