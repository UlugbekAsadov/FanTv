export interface IRegisterRequest {
  username: string;
  phoneNumber: string;
  password: string;
  fullName: string;
}

export interface IRegisterForm extends IRegisterRequest {
  confirmPassword: string;
}

export interface ILoginForm {
  phoneNumber: string;
  password: string;
}

export interface IOtpForm {
  otp: string;
  deviceId: string;
}
