import type { RegisterInput } from '@/apis';
import { GoogleLogo, LoginBg, MagloLogo } from '@/assets';
import { FormField, Input } from '@/components';
import { SpinnerIcon } from '@/components/Icons';
import { getToken } from '@/helpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegister } from './api';
import { RegisterSchema } from './schema';

export default function Register() {
  const token = getToken();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onSubmit',
  });

  const { mutate: registerMutate, isPending, isSuccess } = useRegister();

  const onSubmit = (data: RegisterInput) => {
    registerMutate({ registerInput: data });
  };

  const disableControl = useMemo(() => isPending || isSuccess, [isPending, isSuccess]);

  useEffect(() => {
    if (token) navigate('/');
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-[17fr_15fr]">
      <div className="pt-10 h-screen">
        <div className="flex flex-col max-w-[404px] mx-auto gap-[157.5px] h-full justify-center">
          <div className="fixed top-10">
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
                <button
                  className="primary-button flex items-center gap-2 justify-center"
                  type="submit"
                  disabled={disableControl}
                >
                  Create Account
                  {disableControl && <SpinnerIcon className="w-4 h-4" />}
                </button>
                <button
                  className="secondary-button flex items-center justify-center gap-2.5"
                  type="button"
                  disabled={disableControl}
                >
                  <img src={GoogleLogo} alt="Maglo Logo" />
                  Sign up with Google
                </button>
                <p className="text-center text-sm font-normal leading-none text-text-2 mt-2.5">
                  Already have an account?{' '}
                  <NavLink
                    className={`primary-link ${disableControl ? 'cursor-not-allowed' : ''}`}
                    to={'/login'}
                    onClick={(e) => {
                      if (disableControl) e.preventDefault();
                    }}
                  >
                    Sign in
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img src={LoginBg} className="w-full h-screen object-cover hidden md:block" />
    </section>
  );
}
