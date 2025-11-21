import { z } from 'zod';

export function zodSchema<T>() {
  return {
    object: <S extends Record<keyof T, z.ZodTypeAny>>(shape: S) => {
      return z.object(shape) as z.ZodObject<S> & z.ZodType<T>;
    },
  };
}
