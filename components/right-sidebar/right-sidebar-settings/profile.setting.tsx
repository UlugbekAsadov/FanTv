import { ColorPicker } from '@/components/color-picker';
import { CurstomPropertyInput } from '@/components/custom-property-input';
import { MediaUplaoder } from '@/components/media-uploader';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';

export const ProfileSettings = () => {
  const { t } = useLocaleContext();
  const [image, setImage] = useBlogValues('src');
  const [userName, setUserName] = useBlogValues('text');
  const [color, setColor] = useBlogValues('color');
  const [marginBottom, setMarginBottom] = useBlogValues('marginBottom');
  const [marginTop, setMarginTop] = useBlogValues('marginTop');
  const [fontSize, setFontSize] = useBlogValues('fontSize');

  return (
    <div>
      <div className="py-2 border-b p-3">
        <h3 className="text-center">{t('settings.profile.edit_profile')}</h3>
      </div>

      <div className="px-4 flex flex-col space-y-3">
        <MediaUplaoder onChange={setImage} value={image} />
        <div className="mt-3">
          <h3>{t('settings.profile.edit_username')}</h3>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="">
          <h3>{t('settings.profile.edit_username_color')}</h3>
          <ColorPicker color={color} onChange={(e) => setColor(e.hex)} />
        </div>
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
    </div>
  );
};
