'use client';

import { useParams } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getTranslator, ValidLocale } from '@/i18n';

interface IContext {
  t: (
    key: string,
    params?:
      | {
          [key: string]: string | number;
        }
      | undefined
  ) => ReactNode;
  lang: string | string[];
}

interface IProps {
  children: React.ReactNode;
}

const LocaleContext = createContext<IContext>({} as IContext);

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender<T>(asyncFun: () => Promise<T>, deps = []) {
  const [output, setOutput] = useState<T>();

  useEffect(() => {
    (async function () {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [deps, asyncFun]);
  return output === undefined ? null : output;
}

export const LocaleContextProvider = ({
  children,
}: React.PropsWithChildren<IProps>) => {
  const params = useParams();

  return useDelayedRender(async () => {
    const t = await getTranslator(
      `${params.lang}` as ValidLocale // our middleware ensures this is valid
    );
    const value = {
      t,
      lang: params.lang,
    };
    return (
      <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
  });
};
