import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const bearerToken = req.headers['authorization'] as string;
  return res.json({ me: 'laith harb' });
}
