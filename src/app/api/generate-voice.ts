import { NextRequest, NextResponse } from "next/server";

const VOICE_MAP: Record<string, string> = {
  "male-casual": "pNInz6obpgDQGcFmaJgB", // Adam
  "male-formal": "TxGEqnHWrfWFTfGW9XjX", // Antoni
  "female-casual": "21m00Tcm4TlvDq8ikWAM", // Rachel
  "female-formal": "EXAVITQu4vr4xnSDxMaL", // Bella
};

export async function POST(req: NextRequest) {
  try {
    const { script, voiceStyle } = await req.json();
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "ElevenLabs API key not set." }, { status: 500 });
    }
    const voiceId = VOICE_MAP[voiceStyle] || VOICE_MAP["female-casual"];
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: script,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.7 },
      }),
    });
    if (!response.ok) {
      const err = await response.json();
      return NextResponse.json({ error: err.detail || "ElevenLabs error" }, { status: 500 });
    }
    // ElevenLabs returns audio/mpeg. Convert to base64 data URL for frontend.
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const audioUrl = `data:audio/mpeg;base64,${base64}`;
    return NextResponse.json({ audioUrl });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate voiceover." }, { status: 500 });
  }
} 