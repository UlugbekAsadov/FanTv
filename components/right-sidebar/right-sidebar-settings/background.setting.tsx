import { ColorResult } from 'react-color';

import { ColorPicker } from '@/components/color-picker';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';

export const BackgroundSetting = () => {
  const { t } = useLocaleContext();
  const { template, handleChangeBackgroundColor } = usePhoneContext();

  const handleChangeColor = (color: ColorResult) => {
    handleChangeBackgroundColor(color.hex);
  };

  return (
    <div className="">
      <div className="py-2 border-b p-3">
        <h3 className="text-center">
          {t('settings.background.edit_background')}
        </h3>
      </div>

      <ColorPicker color={template.background} onChange={handleChangeColor} />
    </div>
  );
};
