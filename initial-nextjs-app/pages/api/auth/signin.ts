import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import isStrongPassword from 'validator/lib/isStrongPassword';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as jose from 'jose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const errors: string[] = [];
    const { email, password } = req.body;

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is invalid',
      },
    ];
  }

  return res.status(404).json('Unknown endpoint');
};

export default handler;
