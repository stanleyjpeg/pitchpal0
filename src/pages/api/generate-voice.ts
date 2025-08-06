import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  // Return a mock audio file URL (make sure mock-voice.mp3 exists in public/)
  return res.status(200).json({ audioUrl: '/mock-voice.mp3' });
} 