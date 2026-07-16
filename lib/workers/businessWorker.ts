import { generateAI } from "@/lib/ai";
import type { Provider } from "@/lib/provider/types";
import type { Worker } from "./types";

export const businessWorker: Worker = {
  type: "business",

  async execute(task) {
    const result = await generateAI({
      provider: task.provider,
      prompt: task.prompt,
    });

    return {
      success: result.success,
      output: result.text,
      provider: result.provider as Provider,
    };
  },
};