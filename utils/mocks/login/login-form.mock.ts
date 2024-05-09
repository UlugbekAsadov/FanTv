import { ILoginForm, IRegisterForm } from '@/utils/interfaces/auth.interface';

export const registerFormMock: IRegisterForm = {
  confirmPassword: '',
  phoneNumber: '',
  password: '',
  username: '',
};

export const loginFormMock: ILoginForm = {
  phoneNumber: '',
  password: '',
};
