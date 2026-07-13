export interface MissionStep {
  id: number;
  title: string;
  provider: string;
  status: "pending" | "completed";
}

export function buildMissionPlan(
  missionType: string,
  provider: string
): MissionStep[] {

  switch (missionType) {

    case "business":
      return [
        {
          id: 1,
          title: "Business Strategy",
          provider,
          status: "pending",
        },
        {
          id: 2,
          title: "Brand Identity",
          provider,
          status: "pending",
        },
        {
          id: 3,
          title: "Marketing Campaign",
          provider,
          status: "pending",
        },
      ];

    case "image":
      return [
        {
          id: 1,
          title: "Optimize Prompt",
          provider,
          status: "pending",
        },
        {
          id: 2,
          title: "Generate Image",
          provider,
          status: "pending",
        },
      ];

    case "video":
      return [
        {
          id: 1,
          title: "Storyboard",
          provider,
          status: "pending",
        },
        {
          id: 2,
          title: "Generate Video",
          provider,
          status: "pending",
        },
      ];

    default:
      return [
        {
          id: 1,
          title: "Analyze Goal",
          provider,
          status: "pending",
        },
      ];
  }
}