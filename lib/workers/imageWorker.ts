import { Worker } from "./types";

export const imageWorker: Worker = {
  type: "image",

  async execute(task) {
    return {
      success: true,
      output: `Image Worker completed: ${task.title}`,
      provider: task.provider,
    };
  },
};