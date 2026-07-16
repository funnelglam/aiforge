import { businessWorker } from "./businessWorker";
import { imageWorker } from "./imageWorker";
import { videoWorker } from "./videoWorker";
import { writingWorker } from "./writingWorker";
import { websiteWorker } from "./websiteWorker";
import { researchWorker } from "./researchWorker";
import { WorkerType } from "./types";

export const workers = {
  business: businessWorker,
  image: imageWorker,
  video: videoWorker,
  writing: writingWorker,
  website: websiteWorker,
  research: researchWorker,
};

export function getWorker(type: WorkerType) {
  return workers[type];
}