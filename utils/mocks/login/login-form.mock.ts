import { ILoginForm, IRegisterForm } from '@/utils/interfaces/auth.interface';

export const registerFormMock: IRegisterForm = {
  confirmPassword: '',
  email: '',
  password: '',
  username: '',
};

export const loginFormMock: ILoginForm = {
  email: '',
  password: '',
};
