import axios from 'axios';

import axiosInstance from '@/utils/api/api';
import { ILoginForm } from '@/utils/interfaces/auth.interface';
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
    const res = await axios.post(
      'http://localhost:9000/v1/auth/login',
      loginValue,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    return res;
  }

  /**
   *get user info
   * @returns
   */

  async getMe(): Promise<IUser> {
    const res = await axiosInstance.get('http://localhost:9000/api/v1/me');
    return res.data;
  }
}

const exampleServiceInstance = new Services();
export default exampleServiceInstance;
