import { Worker } from "./types";

export const researchWorker: Worker = {
  type: "research",

  async execute(task) {
    return {
      success: true,
      output: `Research Worker completed: ${task.title}`,
      provider: task.provider,
    };
  },
};