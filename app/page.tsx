import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300">
            🚀 AIForge
          </span>

          <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight">
            Create Images, Videos & AI Content
            <br />
            in Seconds.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-gray-400">
            One platform for AI image generation, video creation, chat,
            voice, and creative tools.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-xl bg-white px-8 py-4 font-bold text-black">
              Start Free
            </button>

            <button className="rounded-xl border border-gray-600 px-8 py-4">
              Watch Demo
            </button>
          </div>
        </section>
      </main>
    </>
  );
}