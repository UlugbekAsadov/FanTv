import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCheckOtp } from '@/react-query/hooks/hooks';
import { IOtpForm } from '@/utils/interfaces/auth.interface';

interface IProps {
  setCurrentScreen: (value: 'register' | 'login') => void;
}

const randomId = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

export const TelegramLogin = ({ setCurrentScreen }: IProps) => {
  const { mutateAsync: addMutate, isLoading } = useCheckOtp();
  const { register, handleSubmit } = useForm<IOtpForm>({
    defaultValues: {
      deviceId: randomId.toString(),
      otp: '',
    },
  });

  const onFormSubmit = (values: IOtpForm) => {
    addMutate(values);
  };

  return (
    <div>
      <DialogTitle>Verify your account</DialogTitle>
      <DialogDescription className="mt-4">
        To verify your account, please enter the 1-minute code sent to your
        Telegram bot
        <a
          className="cursor-pointer mx-2 text-blue-600"
          target="_blank"
          href={`https://t.me/fantv_service_bot?start=${randomId}`}
        >
          @fantvbot
        </a>
      </DialogDescription>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-1 gap-4">
            <Input
              id="otp"
              placeholder="Enter OTP code"
              className="w-full"
              maxLength={6}
              pattern="^[0-9]+$"
              {...register('otp', {
                required: true,
              })}
            />
          </div>
        </div>
        <Button disabled={isLoading} className="d-flex w-[100%]" type="submit">
          {isLoading ? ' Verifying...' : ' Verify'}
        </Button>
      </form>
      <p className="text-xs mt-2 cursor-pointer flex gap-1">
        <span onClick={setCurrentScreen.bind(null, 'login')}>
          Login by phone number
        </span>
        |
        <span onClick={setCurrentScreen.bind(null, 'register')}>
          Register by phone number
        </span>
      </p>
    </div>
  );
};

export default TelegramLogin;
