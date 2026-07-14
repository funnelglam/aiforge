export async function videoExecutor(task: string) {
  console.log("Video Executor");

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    output: `Generated video for ${task}`,
  };
}