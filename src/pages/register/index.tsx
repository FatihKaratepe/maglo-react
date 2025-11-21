import type { RegisterInput } from '@/apis';
import { GoogleLogo, LoginBg, MagloLogo } from '@/assets';
import { FormField, Input } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useRegister } from './api';
import { RegisterSchema } from './schema';

export default function Register() {
  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onSubmit',
  });

  const { mutate: registerMutate } = useRegister();

  const onSubmit = (data: RegisterInput) => {
    registerMutate({ registerInput: data });
  };

  return (
    <section className="grid grid-cols-[17fr_15fr]">
      <div className="pt-10">
        <div className="flex flex-col max-w-[404px] mx-auto gap-[157.5px]">
          <div>
            <img src={MagloLogo} alt="Maglo Logo" />
          </div>

          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-2">
              <h1 className="title-1">Create new account</h1>
              <h1 className="subtitle-1">Welcome back! Please enter your details</h1>
            </div>
            <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit(onSubmit)}>
              <FormField
                label="Full Name"
                control={control}
                name="fullName"
                render={({ field, fieldState: { error }, inputId }) => (
                  <Input
                    id={inputId}
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(e.target.value)}
                    className={`${error ? 'border-red-600' : ''} `}
                  />
                )}
              />
              <FormField
                label="Email"
                control={control}
                name="email"
                render={({ field, fieldState: { error }, inputId }) => (
                  <Input
                    id={inputId}
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(e.target.value)}
                    className={`${error ? 'border-red-600' : ''} `}
                  />
                )}
              />
              <FormField
                label="Password"
                control={control}
                name="password"
                render={({ field, fieldState: { error }, inputId }) => (
                  <Input
                    id={inputId}
                    type="password"
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(e.target.value)}
                    className={`${error ? 'border-red-600' : ''} `}
                  />
                )}
              />
              <div className="flex flex-col mt-2.5 gap-[15px]">
                <button className="primary-button" type="submit">
                  Create Account
                </button>
                <button className="secondary-button flex items-center justify-center gap-2.5" type="button">
                  <img src={GoogleLogo} alt="Maglo Logo" />
                  Sign up with Google
                </button>
                <p className="text-center text-sm font-normal leading-none text-text-2 mt-2.5">
                  Already have an account?{' '}
                  <NavLink className="primary-link" to={'/login'}>
                    Sign in
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img src={LoginBg} className="w-full h-screen object-cover" alt="" />
    </section>
  );
}
