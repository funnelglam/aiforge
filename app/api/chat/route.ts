import { openai } from "@/lib/openai";

import { NextResponse } from "next/server";

export async function POST() {

try {

const response = await openai.responses.create({

model: "gpt-4.1-mini",

input: "Say hello from AIForge",

});

return NextResponse.json({

output: response.output_text,

});

} catch (error: any) {
  console.error("OPENAI FULL ERROR:");
  console.error(error);

  return NextResponse.json(
    {
      error: error?.message,
      type: error?.type,
      code: error?.code,
      status: error?.status,
    },
    { status: 500 }
  );
}

}