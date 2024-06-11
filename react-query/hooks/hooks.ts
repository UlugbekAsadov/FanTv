import { useMutation, useQuery, useQueryClient } from 'react-query';

import Services from '@/react-query/services/services';
import { ILoginForm } from '@/utils/interfaces/auth.interface';
import { IUser } from '@/utils/interfaces/user';

const useLogin = (value: ILoginForm) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return Services.login(value);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
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

export { useGetMe, useLogin };
