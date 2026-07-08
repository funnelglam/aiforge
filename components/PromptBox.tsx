"use client";

import { useState } from "react";

export default function PromptBox({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [prompt, setPrompt] = useState("");

  function submit() {
    if (!prompt.trim()) return;

    onSend(prompt);

    setPrompt("");
  }

  return (
    <div className="border-t border-zinc-800 p-5">

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Message AIForge..."
        className="w-full rounded-xl bg-zinc-900 p-5 h-28"
      />

      <button
        onClick={submit}
        className="mt-4 rounded-xl bg-white text-black px-8 py-3 font-bold"
      >
        Send 🚀
      </button>

    </div>
  );
}