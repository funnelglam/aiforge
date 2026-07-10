export function narrator(type: string) {
  switch (type) {
    case "business":
      return "I've identified this as a business launch. I'll organize branding, marketing, and planning into one guided workflow.";

    case "image":
      return "This looks like an image creation request. I'll optimize your prompt and prepare it for the best visual result.";

    case "video":
      return "I've detected a video project. I'll plan the scenes, timing, and generation strategy before creating it.";

    case "coding":
      return "This is a software project. I'll break it into clear development steps before generating code.";

    case "writing":
      return "I'll structure your writing request, identify the desired tone, and produce polished content.";

    default:
      return "I'm analyzing your goal and preparing the best execution strategy.";
  }
}