import { Mission } from "./types";

export const missions: Mission[] = [
  {
    id: "business",
    title: "Launch a Business",
    icon: "🚀",
    description: "Start and grow a business.",
    tasks: [
      "Business Strategy",
      "Brand Name",
      "Logo Concepts",
      "Marketing Plan",
      "Social Media",
      "Website",
      "Promotional Materials",
    ],
  },
  {
    id: "video",
    title: "Create Viral Videos",
    icon: "🎬",
    description: "Create short-form content.",
    tasks: [
      "Video Ideas",
      "Scripts",
      "Voiceover",
      "Video Generation",
      "Thumbnail",
      "Publishing Plan",
    ],
  },
  {
    id: "brand",
    title: "Design a Brand",
    icon: "🎨",
    description: "Create a complete visual identity.",
    tasks: [
      "Brand Strategy",
      "Logo",
      "Color Palette",
      "Typography",
      "Brand Guide",
    ],
  },
];