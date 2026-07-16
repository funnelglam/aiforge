import { analyzeComplexity } from "./analyzeComplexity";
import { checkSubscription } from "./checkSubscription";
import { chooseProvider } from "./chooseProvider";
import { createPlan } from "./createPlan";
import { detectIntent } from "./detectIntent";
import { detectMission } from "./engine";

export function analyzePrompt(prompt: string) {
  const intent = detectIntent(prompt);

  const mission = detectMission(prompt);

  const complexity = analyzeComplexity(prompt);

  const subscription = checkSubscription();

  const provider = chooseProvider(
    intent,
    complexity,
    subscription
  );

  const tasks = createPlan(mission);

  return {
    narrator: mission
      ? `I understand your goal. I will use the ${mission.id} mission to accomplish it.`
      : "I understand your request and will generate the best execution plan.",

    missionType: mission?.id ?? "general",

    complexity,

    quality:
      complexity === "high"
        ? "High"
        : "Standard",

    provider,

    tasks,

    executionPlan: tasks,

    prompt,

    intent,

    mission,

    subscription,
  };
}