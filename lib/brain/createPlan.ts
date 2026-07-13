import { Mission } from "./mission";

export function createPlan(
  mission?: Mission
): string[] {

  if (!mission) {
    return [];
  }

  return mission.steps.map(step => step.title);

}