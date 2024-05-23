'use client';
import isEqual from 'lodash.isequal';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useLocalStorage } from 'react-use';

import { useToast } from '@/components/ui/use-toast';
import { onBeforeUnload } from '@/utils/funcs/before-unload';
import { ITemplate } from '@/utils/interfaces/template.interface';
import { templateMock } from '@/utils/mocks/template.mock';
import { toastConfig } from '@/utils/mocks/toast.mock';
import { mockUserName } from '@/utils/mocks/user.mock';

import { useLocaleContext } from './locale.context';
import { usePhoneContext } from './phone.context';

interface IUserContext {
  userName: string;
  userTemplate?: ITemplate;
  saveTemplate: () => void;
}
const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) throw Error('UserContext must be used within a Provider');

  return context;
};

interface IProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: IProps) => {
  const [userTemplate, setUserTemplate] = useLocalStorage<ITemplate>(
    `${mockUserName}-magiclink`
  );
  const { template, setTemplate } = usePhoneContext();
  const { t } = useLocaleContext();
  const { toast } = useToast();
  const newTemplate = userTemplate || templateMock;
  const initialTemplate: ITemplate = { ...newTemplate };
  const isDirty = !isEqual(template, initialTemplate);

  const saveTemplate = useCallback(() => {
    toast({
      ...toastConfig,
      description: t('saved_message'),
    });
    setUserTemplate(template);
  }, [setUserTemplate, t, template, toast]);

  useEffect(() => {
    setTemplate(newTemplate);
  }, [newTemplate, setTemplate]);

  useEffect(() => {
    if (isDirty) {
      window.addEventListener('beforeunload', onBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [isDirty]);

  const value: IUserContext = useMemo(
    () => ({ userName: mockUserName, userTemplate, saveTemplate }),
    [userTemplate, saveTemplate]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
