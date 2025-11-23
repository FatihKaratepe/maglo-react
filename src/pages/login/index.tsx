import type { LoginInput } from '@/apis';
import { GoogleLogo, LoginBg, MagloLogo } from '@/assets';
import { FormField, Input } from '@/components';
import { SpinnerIcon } from '@/components/Icons';
import { getToken } from '@/helpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogin } from './api';
import { LoginSchema } from './schema';

export default function Login() {
  const token = getToken();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: 'romibix279@aikunkun.com',
      password: '123456Apc.',
    },
  });

  const { mutate: loginMutate, isPending, isSuccess } = useLogin();

  const onSubmit = (data: LoginInput) => {
    loginMutate({ loginInput: data });
  };

  const disableControl = useMemo(() => {
    return isPending || isSuccess;
  }, [isPending, isSuccess]);

  useEffect(() => {
    if (token) navigate('/');
  });

  return (
    <section className="grid grid-cols-[17fr_15fr]">
      <div className="pt-10">
        <div className="flex flex-col max-w-[404px] mx-auto gap-[157.5px] h-full justify-center">
          <div className="fixed top-10">
            <img src={MagloLogo} alt="Maglo Logo" />
          </div>

          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-2">
              <h1 className="title-1">Sign In</h1>
              <h1 className="subtitle-1">Welcome back! Please enter your details</h1>
            </div>
            <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit(onSubmit)}>
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
                  Sign In
                  {disableControl && <SpinnerIcon className="w-4 h-4" />}
                </button>
                <button
                  className="secondary-button flex items-center justify-center gap-2.5"
                  type="button"
                  disabled={disableControl}
                >
                  <img src={GoogleLogo} alt="Maglo Logo" />
                  Sign in with Google
                </button>
                <p className="text-center text-sm font-normal leading-none text-text-2 mt-2.5">
                  Don’t have an account?{' '}
                  <NavLink
                    className={`primary-link ${disableControl ? 'cursor-not-allowed' : ''}`}
                    to={'/register'}
                    onClick={(e) => {
                      if (disableControl) e.preventDefault();
                    }}
                  >
                    Sign up
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
