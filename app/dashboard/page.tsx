import { redirect } from "next/navigation";
import { createClient } from "@/lib/auth/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Welcome to AIForge 🚀
        </h1>

        <p className="mt-4 text-zinc-400">
          Logged in as:
        </p>

        <p className="mt-2 text-xl">
          {user.email}
        </p>
      </div>
    </main>
  );
}