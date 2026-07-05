export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm">
          🚀 The AI Operating System
        </div>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl">

          One AI.

          <br />

          Infinite Possibilities.

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300">

          Build businesses, generate videos, create images,
          automate work, write content, code apps,
          and launch projects using one powerful AI platform.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">

            Start Free

          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 transition hover:border-white">

            Explore AI

          </button>

        </div>

      </div>

    </section>
  );
}