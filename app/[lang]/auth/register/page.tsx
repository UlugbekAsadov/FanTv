'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IRegisterForm } from '@/utils/interfaces/auth.interface';
import { registerFormMock } from '@/utils/mocks/login/login-form.mock';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IRegisterForm>({
    defaultValues: registerFormMock,
  });

  const passwordValue = getValues('password');

  const handleSubmitForm = (values: IRegisterForm) => {
    console.log({ values });
  };

  return (
    <div className="flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="mx-auto w-[350px] space-y-6"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your details to create an account.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="John Doe"
              {...register('username', { required: 'This field is required' })}
            />
            {errors.username ? (
              <p className="form_error_message">{errors.username?.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
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
          <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              {...register('confirmPassword', {
                validate: {
                  isPassMatched: (value) =>
                    value === passwordValue || 'Passwords did not match',
                },
              })}
            />
            {errors.confirmPassword ? (
              <p className="form_error_message">
                {errors.confirmPassword.message}
              </p>
            ) : null}
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </div>
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Already have an account?
            <Link className="text-blue-600 underline ml-2" href="/auth/login">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
