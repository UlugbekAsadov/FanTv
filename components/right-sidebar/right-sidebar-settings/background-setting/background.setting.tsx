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
      <div className="py-2 border-b p-3">
        <h3 className="text-center">
          {t('settings.background.edit_background')}
        </h3>
      </div>
      <div className="mt-3 px-4">
        <Tabs defaultValue={isBgGradient ? 'gradient' : 'solid'}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="solid">
              {t('settings.background.solid')}
            </TabsTrigger>
            <TabsTrigger value="gradient">
              {t('settings.background.gradient')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="solid">
            <SolidColor />
          </TabsContent>
          <TabsContent value="gradient">
            <GradientColor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
