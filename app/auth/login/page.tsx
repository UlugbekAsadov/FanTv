'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ILoginForm } from '@/utils/interfaces/auth.interface';
import { loginFormMock } from '@/utils/mocks/login/login-form.mock';

function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: loginFormMock,
  });
  const router = useRouter();

  const handleSubmitForm = (values: ILoginForm) => {
    console.log({ values });
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center py-12 bg-background">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="mx-auto w-[350px] space-y-6"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your Phone Number and password to sign in to your account.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="phoneNumber">Phone Number</Label>

            <PhoneInputWithCountry
              placeholder="Enter phone number"
              control={control}
              name="phoneNumber"
              defaultCountry="UZ"
              withCountryCallingCode
              international
              rules={{
                required: 'This field is required',
                minLength: { message: 'Phone number is invalid', value: 13 },
                maxLength: { message: 'Phone number is invalid', value: 13 },
              }}
              initialValueFormat="national"
              className={cn(
                'flex h-10 [&>*]:bg-transparent [&>*]:outline-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-within:!outline-none  focus-within:!ring-2  focus-within:!ring-ring focus-within:!ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
                !!errors.phoneNumber &&
                  'focus-within:!ring-red-500 border-red-400'
              )}
            />

            {errors.phoneNumber ? (
              <p className="form_error_message">{errors.phoneNumber.message}</p>
            ) : null}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              isInvalid={!!errors.password}
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
