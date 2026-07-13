"use client";

import BusinessStudio from "./studios/BusinessStudio";
import VideoStudio from "./studios/VideoStudio";
import ImageStudio from "./studios/ImageStudio";
import GeneralStudio from "./studios/GeneralStudio";

type Props = {
  brain: any;
};

export default function StudioRouter({ brain }: Props) {
  switch (brain.missionType) {
    case "business":
      return <BusinessStudio brain={brain} />;

    case "video":
      return <VideoStudio brain={brain} />;

    case "brand":
      return <ImageStudio brain={brain} />;

    default:
      return <GeneralStudio brain={brain} />;
  }
}