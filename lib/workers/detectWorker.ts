import { WorkerType } from "./types";

export function detectWorker(
  task: string
): WorkerType {

  const text = task.toLowerCase();

  if (
    text.includes("business") ||
    text.includes("strategy") ||
    text.includes("market")
  ) {
    return "business";
  }

  if (
    text.includes("logo") ||
    text.includes("image") ||
    text.includes("design")
  ) {
    return "image";
  }

  if (
    text.includes("video") ||
    text.includes("youtube") ||
    text.includes("tiktok")
  ) {
    return "video";
  }

  if (
    text.includes("website") ||
    text.includes("app")
  ) {
    return "website";
  }

  if (
    text.includes("research")
  ) {
    return "research";
  }

  return "writing";
}