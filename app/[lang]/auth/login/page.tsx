'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ILoginForm } from '@/utils/interfaces/auth.interface';
import { loginFormMock } from '@/utils/mocks/login/login-form.mock';

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: loginFormMock,
  });

  const handleSubmitForm = (values: ILoginForm) => {
    console.log({ values });
  };

  return (
    <div className="flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="mx-auto w-[350px] space-y-6"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in to your account.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              autoComplete="email"
              type="text"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid Email',
                },
              })}
            />
            {errors.email ? (
              <p className="form_error_message">{errors.email.message}</p>
            ) : null}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  message: 'This field should be min 6 characters',
                  value: 6,
                },
              })}
            />
            {errors.password ? (
              <p className="form_error_message">{errors.password.message}</p>
            ) : null}
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </div>
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Dont have an account?
            <Link
              className="text-blue-600 underline ml-2"
              href="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Page;
