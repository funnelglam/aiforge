import { Mission } from "./types";

export const missions: Mission[] = [
  {
    id: "business",
    goal: "Launch or grow a business",
    workspace: "BusinessStudio",
    provider: "openai",
    complexity: "high",
    quality: "Best",
    steps: [
  {
    id: 1,
    title: "Analyze the business goal",
    status: "waiting",
    provider: "openai",
  },
  {
    id: 2,
    title: "Create execution strategy",
    status: "waiting",
    provider: "openai",
  },
  {
    id: 3,
    title: "Generate required assets",
    status: "waiting",
    provider: "flux",
  },
],
  },

  {
    id: "video",
    goal: "Create a video",
    workspace: "VideoStudio",
    provider: "kling",
    complexity: "medium",
    quality: "Best",
    steps: [
  {
    id: 1,
    title: "Write video script",
    status: "waiting",
    provider: "openai",
  },
  {
    id: 2,
    title: "Generate storyboard",
    status: "waiting",
    provider: "flux",
  },
  {
    id: 3,
    title: "Generate video",
    status: "waiting",
    provider: "kling",
  },
],
  },

  {
    id: "brand",
    goal: "Create branding",
    workspace: "ImageStudio",
    provider: "flux",
    complexity: "medium",
    quality: "Best",
    steps: [
  {
    id: 1,
    title: "Analyze brand",
    status: "waiting",
    provider: "openai",
  },
  {
    id: 2,
    title: "Generate logo",
    status: "waiting",
    provider: "flux",
  },
  {
    id: 3,
    title: "Create brand assets",
    status: "waiting",
    provider: "flux",
  },
],
  },
];