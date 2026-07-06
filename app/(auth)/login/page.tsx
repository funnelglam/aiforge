"use client";


import { useState } from "react";
import { createClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function handleLogin(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  console.log("NEW LOGIN FUNCTION RUNNING");

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  router.push("/dashboard");
}

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-zinc-900 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Welcome To AIForge 🚀
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg bg-zinc-800 p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg bg-zinc-800 p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black py-3 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

