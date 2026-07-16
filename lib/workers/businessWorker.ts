import { Worker } from "./types";

import { generateAI } from "@/lib/ai";

export const businessWorker: Worker = {
  type: "business",

  async execute(task) {

    const result = await generateAI({
      provider: task.provider as any,
      prompt: task.prompt,
    });

    return {
      success: result.success,
      output: result.text,
      provider: result.provider,
    };
  },
};