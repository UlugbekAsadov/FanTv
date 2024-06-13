import axiosInstance from '@/utils/api/api';
import {
  ILoginForm,
  IOtpForm,
  IRegisterForm,
} from '@/utils/interfaces/auth.interface';
import { IUser } from '@/utils/interfaces/user';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

class Services {
  /**
   *To Log in
   * @param loginValue
   * @returns
   */
  async login(loginValue: ILoginForm) {
    const res = await axiosInstance.post('/auth/login/', loginValue);
    return res;
  }

  /**
   *To Register
   * @param registerValue
   * @returns
   */
  async register(registerValue: IRegisterForm) {
    const res = await axiosInstance.post('/auth/register/', registerValue);
    return res;
  }

  /**
   *Telegram check otp
   * @param registerValue
   * @returns
   */
  async telegramCheckOtp(value: IOtpForm) {
    const res = await axiosInstance.post('/auth/telegram-check-otp', value);
    return res;
  }

  /**
   *get user info
   * @returns
   */

  async getMe(): Promise<IUser> {
    const res = await axiosInstance.get('/me');
    return res.data;
  }
}

const exampleServiceInstance = new Services();
export default exampleServiceInstance;
