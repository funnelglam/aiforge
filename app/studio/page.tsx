"use client";

import { useEffect, useState } from "react";
import StudioManager from "@/components/StudioManager";

export default function StudioPage() {
  const [goal, setGoal] = useState<string | null>(null);

  useEffect(() => {
    const savedGoal =
      sessionStorage.getItem("forgeGoal") || "";

    setGoal(savedGoal);
  }, []);

  if (goal === null) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="mx-auto max-w-6xl">
        <StudioManager goal={goal} />
      </div>
    </main>
  );
}