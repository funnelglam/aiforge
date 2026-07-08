"use client";

import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!prompt.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

   const data = await res.json();

if (!res.ok) {
  setAnswer("❌ " + data.error);
  setLoading(false);
  return;
}

setAnswer(data.output);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        AIForge 🚀
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="What do you want to create today?"
        className="w-full rounded-xl bg-zinc-900 p-5 h-40"
      />

      <button
        onClick={generate}
        className="mt-5 rounded-xl bg-white text-black px-8 py-3 font-bold"
      >
        {loading ? "Generating..." : "Generate 🚀"}
      </button>

      <div className="mt-10 rounded-xl bg-zinc-900 p-6 whitespace-pre-wrap">
        {answer}
      </div>

    </main>
  );
}