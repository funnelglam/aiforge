import { Mission } from "./mission";

export async function executeMission(
  mission: Mission,
  onUpdate: (mission: Mission) => void
) {

  const updated = structuredClone(mission);

  for (const step of updated.steps) {

    step.status = "running";

    onUpdate(updated);

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    step.status = "completed";

    step.result =
      `${step.title} completed successfully.`;

    onUpdate(updated);
  }

  return updated;
}