import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import isStrongPassword from 'validator/lib/isStrongPassword';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, phone, email, city, password } = req.body;

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: 'First name is invalid',
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: 'Last name is invalid',
    },
    {
      valid: validator.isEmail(email),
      errorMessage: 'Email is invalid',
    },
    {
      valid: validator.isMobilePhone(phone, 'any'),
      errorMessage: 'Phone number is invalid',
    },
    {
      valid: validator.isLength(city, {
        min: 1,
      }),
      errorMessage: 'City is invalid',
    },
    {
      valid: isStrongPassword(password),
      errorMessage: 'Password invalid',
    },
  ];

  if (req.method === 'POST') {
    res.status(200).json({
      hello: 'test',
    });
  }
};

export default handler;
