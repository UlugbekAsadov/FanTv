import { BackgroundImage } from '@/components/right-sidebar/right-sidebar-settings/background-setting/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';

import { GradientColor } from './gradiend-color';
import { SolidColor } from './solid-color';

export const BackgroundSetting = () => {
  const { t } = useLocaleContext();
  const { template } = usePhoneContext();
  const isBgGradient = template.background.includes('linear-gradient');

  return (
    <div>
      <Tabs defaultValue={isBgGradient ? 'gradient' : 'solid'}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="solid">
            {t('settings.background.solid')}
          </TabsTrigger>
          <TabsTrigger value="gradient">
            {t('settings.background.gradient')}
          </TabsTrigger>{' '}
          <TabsTrigger value="image">
            {t('settings.background.image')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <SolidColor />
        </TabsContent>
        <TabsContent value="gradient">
          <GradientColor />
        </TabsContent>
        <TabsContent value="image">
          <BackgroundImage />
        </TabsContent>
      </Tabs>
    </div>
  );
};
