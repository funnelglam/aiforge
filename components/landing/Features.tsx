import {
  Image,
  Video,
  MessageSquare,
  Code2,
  FileText,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Image,
    title: "AI Images",
    description: "Generate stunning marketing images, product shots, logos, and artwork.",
  },
  {
    icon: Video,
    title: "AI Videos",
    description: "Create cinematic videos, ads, Shorts, and presentations.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description: "Research, brainstorm, summarize, and get expert assistance.",
  },
  {
    icon: Code2,
    title: "AI Coding",
    description: "Build websites, apps, automations, and APIs faster.",
  },
  {
    icon: FileText,
    title: "AI Documents",
    description: "Generate proposals, contracts, business plans, and reports.",
  },
  {
    icon: Sparkles,
    title: "AI Workflows",
    description: "Chain multiple AI tools together with one prompt.",
  },
];

export default function Features() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-violet-400">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            One workspace. Multiple AI capabilities. Built to help you create faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <feature.icon className="mb-6 h-12 w-12 text-violet-400" />

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}