"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommandBox() {
const router = useRouter();
const [prompt, setPrompt] = useState("");

  function handleForge() {
  if (!prompt.trim()) return;

  sessionStorage.setItem("forgeGoal", prompt);

  router.push("/workspace");
}

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

          <h2 className="text-center text-4xl font-bold text-white">
            Tell AIForge what you want.
          </h2>

          <p className="mt-4 text-center text-zinc-400 text-lg">
  From a single idea to a complete project.
  AIForge plans, creates, and builds everything you need—
  all from one simple request.
</p>

          <div className="mt-10">

            <textarea
  rows={5}
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Example: Create a complete marketing campaign for my restaurant including logo, menu, Facebook ads, TikTok videos and posters."
  className="w-full rounded-2xl border border-zinc-700 bg-black p-6 text-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
/>

          </div>

          <div className="mt-8 flex justify-center">

<button
  onClick={handleForge}
  className="rounded-2xl bg-violet-600 px-10 py-5 text-lg font-bold text-white transition hover:bg-violet-500"
>
  ⚡ Forge My Project
</button>

          </div>

        </div>

      </div>
    </section>
  );
}