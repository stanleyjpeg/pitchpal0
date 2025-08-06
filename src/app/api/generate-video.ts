import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { script, voiceStyle } = await req.json();
    // TODO: Replace with real D-ID API call
    // For now, return a mock video URL
    const videoUrl = "/mock-video.mp4";
    return NextResponse.json({ videoUrl });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate video preview." }, { status: 500 });
  }
} 