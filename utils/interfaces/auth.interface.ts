export interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterForm extends IRegisterRequest {
  confirmPassword: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
