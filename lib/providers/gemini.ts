import {
  AIProvider,
  ProviderRequest,
  ProviderResponse,
} from "./types";

export const geminiProvider: AIProvider = {
  name: "gemini",

  async generate(
    request: ProviderRequest
  ): Promise<ProviderResponse> {

    return {
      text:
        "Gemini Provider (Mock): " +
        request.prompt,
    };
  },
};