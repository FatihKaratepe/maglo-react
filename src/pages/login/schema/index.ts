import type { LoginInput } from '@/apis';
import { zodSchema } from '@/helpers';
import { z } from 'zod';

export const LoginSchema = zodSchema<LoginInput>().object({
  email: z.email({
    error: (iss) => (iss.input === undefined ? 'Email is required.' : 'Enter a valid email.'),
  }),
  password: z.string('Password is required.'),
});
