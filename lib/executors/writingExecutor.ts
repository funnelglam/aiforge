export async function writingExecutor(task: string) {
  console.log("Writing Executor");

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    output: `Finished writing: ${task}`,
  };
}