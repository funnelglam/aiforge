import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai";

export async function GET() {
  const result = await generateAI({
    provider: "openai",
    prompt:
      "Give me three practical ideas for promoting a new ramen restaurant.",
    maxTokens: 300,
  });

  return NextResponse.json(result);
}