import { ForgeJob } from "./forgeJob";

export async function executeJob(job: ForgeJob) {
  console.log("Starting Job");

  for (const task of job.tasks) {
    console.log("Executing:", task);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
  }

  console.log("Finished");
}