import { Worker } from "./types";

export const writingWorker: Worker = {
  type: "writing",

  async execute(task) {
    return {
      success: true,
      output: `Writing Worker completed: ${task.title}`,
      provider: task.provider,
    };
  },
};