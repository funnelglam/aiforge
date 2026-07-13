import BusinessStudio from "@/components/studios/BusinessStudio";
import ImageStudio from "@/components/studios/ImageStudio";
import VideoStudio from "@/components/studios/VideoStudio";
import WritingStudio from "@/components/studios/WritingStudio";
import CodingStudio from "@/components/studios/CodingStudio";
import GeneralStudio from "@/components/studios/GeneralStudio";

export function chooseStudio(missionType: string) {
  switch (missionType) {
    case "business":
      return BusinessStudio;

    case "image":
      return ImageStudio;

    case "video":
      return VideoStudio;

    case "writing":
      return WritingStudio;

    case "coding":
      return CodingStudio;

    default:
      return GeneralStudio;
  }
}