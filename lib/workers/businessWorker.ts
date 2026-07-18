import type { AIResponse } from "@/lib/ai/types";
import type { Worker } from "./types";

export const businessWorker: Worker = {
  type: "business",

  async execute(task) {
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: task.provider,
          prompt: task.prompt,
        }),
      });

      const result = (await response.json()) as AIResponse;

      return {
        success: result.success,
        output: result.text,
        provider: result.provider,
      };
    } catch (error) {
      return {
        success: false,
        output:
          error instanceof Error
            ? error.message
            : "Business Worker request failed.",
        provider: task.provider,
      };
    }
  },
};