import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  // Return a mock video file URL (make sure mock-video.mp4 exists in public/)
  return res.status(200).json({ videoUrl: '/mock-video.mp4' });
} 