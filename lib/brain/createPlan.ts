import { Mission } from "./types";

export function createPlan(
  mission?: Mission
): string[] {
  if (!mission) {
    return [];
  }

  return mission.steps.map((step) => step.title);
}