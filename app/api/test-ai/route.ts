import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai/router";

export async function GET() {
  const result = await generateAI({
    provider: "openai",
    prompt: "Hello AIForge!",
  });

  return NextResponse.json(result);
}