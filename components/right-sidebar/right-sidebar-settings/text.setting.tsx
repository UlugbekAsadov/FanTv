import { ColorPicker } from '@/components/color-picker';
import { CustomSelect } from '@/components/custom-select';
import { PositionSelectSetting } from '@/components/position-select-setting';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';
import { defaultFontSizes } from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const TextSetting = () => {
  const { t } = useLocaleContext();
  const [value, onChange] = useBlogValues('text');
  const [color, setColor] = useBlogValues('color');
  const [fontSize, setFontSize] = useBlogValues('fontSize');
  const [position, setPosition] = useBlogValues<Positions>('position');

  return (
    <div>
      <div className="py-2 border-b p-3">
        <h3 className="text-center">{t('settings.text.edit_text')}</h3>
      </div>
      <div className="px-4 flex flex-col space-y-3">
        <div className=" mt-3">
          <h3 className="">{t('settings.text.edit_text_value')}</h3>
          <Input value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
        <div>
          <h3 className="">{t('settings.text.edit_text_color')}</h3>
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        </div>
        <CustomSelect
          title={t('settings.properties.font_size')}
          value={fontSize}
          onChange={setFontSize}
          values={defaultFontSizes}
        />
        <PositionSelectSetting
          title={t('settings.properties.text_align')}
          value={position}
          onChange={setPosition}
        />
      </div>
    </div>
  );
};
