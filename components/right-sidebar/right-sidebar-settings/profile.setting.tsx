import { ColorPicker } from '@/components/color-picker';
import { CurstomPropertyInput } from '@/components/custom-property-input';
import { MediaUplaoder } from '@/components/media-uploader';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlockValues } from '@/hooks/useBlockValues';

export const ProfileSettings = () => {
  const { t } = useLocaleContext();
  const [image, setImage] = useBlockValues('src');
  const [userName, setUserName] = useBlockValues('text');
  const [color, setColor] = useBlockValues('color');
  const [marginBottom, setMarginBottom] = useBlockValues('marginBottom');
  const [marginTop, setMarginTop] = useBlockValues('marginTop');
  const [fontSize, setFontSize] = useBlockValues('fontSize');

  return (
    <div className="flex flex-col space-y-3">
      <MediaUplaoder onChange={setImage} value={image} />
      <div className="mt-3">
        <h3>{t('settings.profile.edit_username')}</h3>
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <ColorPicker
        title={t('settings.profile.edit_username_color')}
        color={color}
        onChange={(e) => setColor(e.hex)}
      />
      <CurstomPropertyInput
        onChange={setMarginTop}
        title={t('settings.properties.margin_top')}
        value={marginTop}
        max={64}
        min={5}
        type="number"
      />
      <CurstomPropertyInput
        onChange={setMarginBottom}
        title={t('settings.properties.margin_bottom')}
        value={marginBottom}
        max={64}
        min={5}
        type="number"
      />
      <CurstomPropertyInput
        onChange={setFontSize}
        title={t('settings.properties.font_size')}
        value={fontSize}
        max={42}
        min={14}
        type="number"
      />
    </div>
  );
};
