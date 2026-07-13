import { AIProvider } from "./types";

type RouterInput = {
  type: string;
  complexity: string;
  premium: boolean;
};

export function chooseProvider({
  type,
  complexity,
  premium,
}: RouterInput): AIProvider {

  if (premium) {
    return "openai";
  }

  if (complexity === "high") {
    return "openai";
  }

  return "gemini";
}