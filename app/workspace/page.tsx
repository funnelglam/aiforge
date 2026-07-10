"use client";

import { useEffect, useState } from "react";
import ForgeWorkspace from "@/components/ForgeWorkspace";

export default function WorkspacePage() {
  const [goal, setGoal] = useState("");

  useEffect(() => {
    const savedGoal = sessionStorage.getItem("forgeGoal") || "";
    setGoal(savedGoal);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="mx-auto max-w-6xl">
        <ForgeWorkspace goal={goal} />
      </div>
    </main>
  );
}