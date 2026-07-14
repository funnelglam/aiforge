export async function businessExecutor(task: string) {
  console.log("Business Executor");

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    output: `Finished: ${task}`,
  };
}

export async function analyzeBusiness(goal: string) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    niche: "Restaurant",
    audience: "Food lovers",
    style: "Modern Japanese",
    recommendation:
      "Focus on premium branding with clean typography and bold colors.",
  };
}