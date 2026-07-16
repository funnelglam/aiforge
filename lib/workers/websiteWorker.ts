import { Worker } from "./types";

export const websiteWorker: Worker = {
  type: "website",

  async execute(task) {
    return {
      success: true,
      output: `Website Worker completed: ${task.title}`,
      provider: task.provider,
    };
  },
};