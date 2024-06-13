'use client';
import { useForm } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useRegister } from '@/react-query/hooks/hooks';
import { IRegisterForm } from '@/utils/interfaces/auth.interface';
import { registerFormMock } from '@/utils/mocks/login/login-form.mock';

interface IProps {
  setCurrentScreen: (value: 'telegram' | 'login') => void;
}

const Register = ({ setCurrentScreen }: IProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IRegisterForm>({
    defaultValues: registerFormMock,
  });

  const passwordValue = getValues('password');
  const { mutateAsync: addMutate } = useRegister();

  const handleSubmitForm = (values: IRegisterForm) => {
    addMutate(values);
  };

  return (
    <div className="flex items-center justify-center ">
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
            <Label htmlFor="username">Full name</Label>
            <Input
              id="username"
              isInvalid={!!errors.password}
              placeholder="John Doe"
              {...register('fullName', { required: 'This field is required' })}
            />
            {errors.username ? (
              <p className="form_error_message">{errors.fullName?.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              isInvalid={!!errors.password}
              placeholder="John Doe"
              {...register('username', { required: 'This field is required' })}
            />
            {errors.username ? (
              <p className="form_error_message">{errors.username?.message}</p>
            ) : null}
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              isInvalid={!!errors.password}
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
              isInvalid={!!errors.password}
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
            <p className=" gap-1 ml-2 cursor-pointer w-full   ">
              <span
                className="text-blue-600 mr-2"
                onClick={setCurrentScreen.bind(null, 'login')}
              >
                Sig in
              </span>
              |
              <span
                className="text-blue-600 ml-2"
                onClick={setCurrentScreen.bind(null, 'telegram')}
              >
                Sig in by telegram
              </span>
            </p>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
