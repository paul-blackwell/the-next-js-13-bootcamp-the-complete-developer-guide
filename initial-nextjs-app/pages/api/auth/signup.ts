import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    res.status(200).json({
      hello: 'there',
    });
  }
};

export default handler;
