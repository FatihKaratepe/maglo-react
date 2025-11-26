import type { RegisterInput } from '@/apis';
import { ZodSchema } from '@/helpers';
import { z } from 'zod';

export const RegisterSchema = ZodSchema<RegisterInput>().object({
  fullName: z
    .string({
      required_error: 'Full Name is required.',
    })
    .min(1, 'Full Name is required.'),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .min(1, 'Email is required.')
    .email('Enter a valid email.'),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(1, 'Password is required.'),
});
