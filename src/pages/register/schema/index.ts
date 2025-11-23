import type { RegisterInput } from '@/apis';
import { ZodSchema } from '@/helpers';
import { z } from 'zod';

export const RegisterSchema = ZodSchema<RegisterInput>().object({
  fullName: z.string('Full Name is required.'),
  email: z.email({
    error: (iss) => (iss.input === undefined ? 'Email is required.' : 'Enter a valid email.'),
  }),
  password: z.string('Password is required.'),
});
