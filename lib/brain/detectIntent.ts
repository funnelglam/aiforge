import { Intent } from "./types";

export function detectIntent(prompt: string): Intent {
  const text = prompt.toLowerCase();

  if (
    text.includes("restaurant") ||
    text.includes("business") ||
    text.includes("coffee") ||
    text.includes("shop")
  ) {
    return "business";
  }

  if (
    text.includes("logo") ||
    text.includes("image") ||
    text.includes("photo")
  ) {
    return "image";
  }

  if (
    text.includes("video") ||
    text.includes("youtube") ||
    text.includes("tiktok") ||
    text.includes("reel")
  ) {
    return "video";
  }

  if (
    text.includes("website")
  ) {
    return "website";
  }

  if (
    text.includes("app")
  ) {
    return "app";
  }

  if (
    text.includes("marketing") ||
    text.includes("facebook") ||
    text.includes("instagram")
  ) {
    return "marketing";
  }

  return "general";
}