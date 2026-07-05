const steps = [
  {
    number: "01",
    title: "Describe your idea",
    description:
      "Type what you want to create using natural language.",
  },
  {
    number: "02",
    title: "AI selects the best model",
    description:
      "AIForge automatically routes your request to the most suitable AI model.",
  },
  {
    number: "03",
    title: "Generate instantly",
    description:
      "Create images, videos, code, documents and more within seconds.",
  },
  {
    number: "04",
    title: "Export & share",
    description:
      "Download your result or publish it directly to your workflow.",
  },
];

export default function WorkflowGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold uppercase tracking-widest">
            Workflow
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            From Prompt to Result
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            AIForge simplifies creation by automatically choosing the
            right AI model and generating your content in seconds.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}