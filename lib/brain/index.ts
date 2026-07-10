import { analyzeComplexity } from "./analyzeComplexity";
import { checkSubscription } from "./checkSubscription";
import { chooseProvider } from "./chooseProvider";
import { createPlan } from "./createPlan";
import { detectIntent } from "./detectIntent";
import { detectMission } from "./engine";

export async function processPrompt(
  prompt: string
) {
  const intent = detectIntent(prompt);

  const mission = detectMission(prompt);

  const complexity =
    analyzeComplexity(prompt);

  const subscription =
    checkSubscription();

  const provider =
    chooseProvider(
      intent,
      complexity,
      subscription
    );

  const executionPlan =
    createPlan(mission);

  return {
    prompt,
    intent,
    mission,
    complexity,
    subscription,
    provider,
    executionPlan,
  };
}