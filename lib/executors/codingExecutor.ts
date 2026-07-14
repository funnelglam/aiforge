export async function codingExecutor(task: string) {
  console.log("Coding Executor");

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    output: `Finished coding: ${task}`,
  };
}