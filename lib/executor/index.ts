import { ExecutionTask } from "./types";

import { businessExecutor } from "../executors/businessExecutor";
import { imageExecutor } from "../executors/imageExecutor";
import { videoExecutor } from "../executors/videoExecutor";
import { writingExecutor } from "../executors/writingExecutor";
import { codingExecutor } from "../executors/codingExecutor";

export async function executeJob(
  tasks: ExecutionTask[],
  onUpdate: (tasks: ExecutionTask[]) => void
) {
  const updated = [...tasks];

  for (let i = 0; i < updated.length; i++) {
    updated[i].status = "running";
    onUpdate([...updated]);

    const title = updated[i].title.toLowerCase();

    if (
      title.includes("business") ||
      title.includes("market") ||
      title.includes("strategy")
    ) {
      await businessExecutor(updated[i].title);
    } else if (
      title.includes("image") ||
      title.includes("logo") ||
      title.includes("design")
    ) {
      await imageExecutor(updated[i].title);
    } else if (
      title.includes("video") ||
      title.includes("youtube") ||
      title.includes("tiktok")
    ) {
      await videoExecutor(updated[i].title);
    } else if (
      title.includes("write") ||
      title.includes("facebook") ||
      title.includes("blog")
    ) {
      await writingExecutor(updated[i].title);
    } else if (
      title.includes("code") ||
      title.includes("website") ||
      title.includes("app")
    ) {
      await codingExecutor(updated[i].title);
    } else {
      await businessExecutor(updated[i].title);
    }

    updated[i].status = "completed";
    onUpdate([...updated]);
  }
}