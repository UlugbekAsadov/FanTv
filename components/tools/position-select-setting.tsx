import { ReactNode } from 'react';

import { useLocaleContext } from '@/context/locale.context';
import { Positions } from '@/utils/types/properties.type';

import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

interface IProps {
  value: Positions;
  onChange: (position: Positions) => void;
  title: ReactNode;
}

export const PositionSelectSetting = ({ onChange, value, title }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div>
      <p className="mb-2">{title}</p>
      <Tabs defaultValue={value} value={value} onChange={(e) => console.log(e)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="start" onClick={onChange.bind(null, 'start')}>
            {t('settings.properties.start')}
          </TabsTrigger>
          <TabsTrigger value="center" onClick={onChange.bind(null, 'center')}>
            {t('settings.properties.center')}
          </TabsTrigger>
          <TabsTrigger value="end" onClick={onChange.bind(null, 'end')}>
            {t('settings.properties.end')}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
