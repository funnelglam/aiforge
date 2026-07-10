export type GoalType =
  | "business"
  | "image"
  | "video"
  | "writing"
  | "coding"
  | "design"
  | "marketing"
  | "research"
  | "general";

export function classifyGoal(prompt: string): GoalType {
  const text = prompt.toLowerCase();

  if (
    text.includes("restaurant") ||
    text.includes("coffee shop") ||
    text.includes("business") ||
    text.includes("startup")
  ) {
    return "business";
  }

  if (
    text.includes("logo") ||
    text.includes("poster") ||
    text.includes("banner")
  ) {
    return "design";
  }

  if (
    text.includes("image") ||
    text.includes("photo") ||
    text.includes("background")
  ) {
    return "image";
  }

  if (
    text.includes("video") ||
    text.includes("shorts") ||
    text.includes("reels") ||
    text.includes("tiktok")
  ) {
    return "video";
  }

  if (
    text.includes("write") ||
    text.includes("blog") ||
    text.includes("essay")
  ) {
    return "writing";
  }

  if (
    text.includes("website") ||
    text.includes("code") ||
    text.includes("app")
  ) {
    return "coding";
  }

  return "general";
}