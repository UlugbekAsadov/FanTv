import 'react-phone-number-input/style.css';

import { useState } from 'react';

import { useDialog } from '@/context/dialog.context';

import { Dialog, DialogContent } from '../ui/dialog';
import Login from './login/login';
import Register from './register/register';
import TelegramLogin from './telegram-login/telegram-login';

const AuthModal = () => {
  const { isOpen } = useDialog();
  const [currentScreen, setCurrentScreen] = useState<
    'register' | 'login' | 'telegram'
  >('telegram');

  const screenComponents = {
    login: <Login setCurrentScreen={setCurrentScreen} />,
    register: <Register setCurrentScreen={setCurrentScreen} />,
    telegram: <TelegramLogin setCurrentScreen={setCurrentScreen} />,
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>{screenComponents[currentScreen]}</DialogContent>
    </Dialog>
  );
};

export default AuthModal;
