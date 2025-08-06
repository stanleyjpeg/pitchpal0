import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productUrl, description, tone, platform, length } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key not set." }, { status: 500 });
    }

    // Compose the prompt
    const prompt = `You are an expert product marketer. Write a ${length} persuasive, confident, and ${tone.toLowerCase()} short-form product pitch script for a product on ${platform}.\n${productUrl ? `Product URL: ${productUrl}` : ""}${description ? `\nDescription: ${description}` : ""}\nFormat as 3-5 short lines for voiceover.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a world-class product pitch copywriter." },
          { role: "user", content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.8,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "OpenAI error" }, { status: 500 });
    }
    const text = data.choices?.[0]?.message?.content || "";
    const script = text.split("\n").map((line: string) => line.trim()).filter(Boolean);
    return NextResponse.json({ script });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate script." }, { status: 500 });
  }
} 