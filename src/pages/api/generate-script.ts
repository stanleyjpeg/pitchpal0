import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    // Return a mock script for development/testing
    const script = [
      "Introducing the next big thing for your daily routine!",
      "Experience innovation and convenience like never before.",
      "Don't miss out—get yours today on TikTok Shop!"
    ];
    return res.status(200).json({ script });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to generate script.' });
  }
} 