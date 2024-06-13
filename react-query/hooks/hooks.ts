import { useMutation, useQuery } from 'react-query';

import Services from '@/react-query/services/services';
import {
  ILoginForm,
  IOtpForm,
  IRegisterForm,
} from '@/utils/interfaces/auth.interface';
import { IUser } from '@/utils/interfaces/user';

const useLogin = () => {
  return useMutation(
    (value: ILoginForm) => {
      return Services.login(value);
    },
    {
      onSuccess: () => {
        //handle success
      },
    }
  );
};

const useRegister = () => {
  return useMutation(
    (value: IRegisterForm) => {
      return Services.register(value);
    },
    {
      onSuccess: () => {
        //handle success
      },
    }
  );
};

const useCheckOtp = () => {
  return useMutation(
    (value: IOtpForm) => {
      return Services.telegramCheckOtp(value);
    },
    {
      onSuccess: () => {
        //handle success
      },
    }
  );
};

const useGetMe = () => {
  return useQuery<IUser, Error>('user', async () => {
    const data = await Services.getMe();
    return data;
  });
};

export { useCheckOtp, useGetMe, useLogin, useRegister };
