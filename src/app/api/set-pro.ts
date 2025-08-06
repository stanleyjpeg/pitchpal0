import { NextRequest, NextResponse } from "next/server";
import { ClerkClient } from "@clerk/clerk-sdk-node";

const clerk = Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    
    // For now, we'll skip session verification and just update the user metadata
    // In production, you should implement proper authentication
    await clerk.users.updateUserMetadata(userId, { publicMetadata: { pro: true } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to set Pro status." }, { status: 500 });
  }
} 