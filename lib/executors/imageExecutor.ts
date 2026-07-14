export async function imageExecutor(task: string) {
  console.log("Image Executor");

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    output: `Generated image for ${task}`,
  };
}