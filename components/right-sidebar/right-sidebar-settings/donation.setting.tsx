import { ColorPicker } from '@/components/color-picker';
import { useLocaleContext } from '@/context/locale.context';
import { useBlockValues } from '@/hooks/useBlockValues';

export const DonationSetting = () => {
  const { t } = useLocaleContext();
  const [textColor, setTextColor] = useBlockValues('color');
  const [backgroundColor, setBackgroundColor] =
    useBlockValues('backgroundColor');

  return (
    <div className="flex flex-col space-y-3">
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
  );
};
