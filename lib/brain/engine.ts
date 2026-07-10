import { missions } from "./missions";

export function detectMission(prompt: string) {
  const text = prompt.toLowerCase();

  if (
    text.includes("business") ||
    text.includes("restaurant") ||
    text.includes("coffee") ||
    text.includes("shop")
  ) {
    return missions.find((m) => m.id === "business");
  }

  if (
    text.includes("video") ||
    text.includes("youtube") ||
    text.includes("reel") ||
    text.includes("tiktok")
  ) {
    return missions.find((m) => m.id === "video");
  }

  if (
    text.includes("logo") ||
    text.includes("brand")
  ) {
    return missions.find((m) => m.id === "brand");
  }

  return undefined;
}