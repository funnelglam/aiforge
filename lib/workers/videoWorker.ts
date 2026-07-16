import { Worker } from "./types";

export const videoWorker: Worker = {
  type: "video",

  async execute(task) {
    return {
      success: true,
      output: `Video Worker completed: ${task.title}`,
      provider: task.provider,
    };
  },
};