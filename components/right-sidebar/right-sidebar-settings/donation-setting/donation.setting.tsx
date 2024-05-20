import { ColorPicker } from '@/components/color-picker';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';

export const DonationSetting = () => {
  const { t } = useLocaleContext();
  const [textColor, setTextColor] = useBlogValues('color');
  const [backgroundColor, setBackgroundColor] =
    useBlogValues('backgroundColor');

  return (
    <div>
      <div className="py-2 border-b p-3">
        <h3 className="text-center">{t('settings.link.edit_link')}</h3>
      </div>

      <div className="px-4 flex flex-col space-y-3">
        <ColorPicker
          title={t('settings.properties.text_color')}
          color={textColor}
          onChange={(color) => setTextColor(color.hex)}
        />
        <ColorPicker
          title={t('settings.properties.button_background')}
          color={backgroundColor}
          onChange={(color) => setBackgroundColor(color.hex)}
        />
      </div>
    </div>
  );
};
