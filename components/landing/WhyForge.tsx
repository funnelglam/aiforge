import {
  Brain,
  Zap,
  Boxes,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Smart AI Routing",
    description:
      "AIForge automatically selects the best AI model for every request, so you don't have to.",
  },
  {
    icon: Boxes,
    title: "Everything in One Place",
    description:
      "Generate images, videos, code, documents, presentations and more from one workspace.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Stop switching between different websites. Create everything from a single prompt.",
  },
  {
    icon: Sparkles,
    title: "Professional Results",
    description:
      "Get production-ready content powered by the world's leading AI models.",
  },
];

export default function WhyForge() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-[0.3em] font-semibold">
            WHY AIFORGE
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            One Platform.
            <br />
            Unlimited Possibilities.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Stop paying for multiple AI tools. AIForge intelligently
            connects you with the right AI for every task.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-violet-500 hover:bg-white/10 hover:-translate-y-2"
            >
              <reason.icon className="mb-6 h-12 w-12 text-violet-400" />

              <h3 className="text-2xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}