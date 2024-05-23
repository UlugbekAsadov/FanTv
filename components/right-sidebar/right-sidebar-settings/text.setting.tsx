import { ColorPicker } from '@/components/tools/color-picker';
import { CustomPropertyInput } from '@/components/tools/custom-property-input';
import { CustomSelect } from '@/components/tools/custom-select';
import { PositionSelectSetting } from '@/components/tools/position-select-setting';
import { Textarea } from '@/components/ui/textarea';
import { useLocaleContext } from '@/context/locale.context';
import { useBlockValues } from '@/hooks/useBlockValues';
import { defaultFontSizes } from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const TextSetting = () => {
  const { t } = useLocaleContext();
  const [value, onChange] = useBlockValues('text');
  const [color, setColor] = useBlockValues('color');
  const [fontSize, setFontSize] = useBlockValues('fontSize');
  const [position, setPosition] = useBlockValues<Positions>('position');
  const [marginTop, setMarginTop] = useBlockValues('marginTop');
  const [marginBottom, setMarginBottom] = useBlockValues('marginBottom');

  return (
    <div className="flex flex-col space-y-3">
      <div className=" mt-3">
        <h3 className="">{t('settings.text.edit_text_value')}</h3>
        <Textarea value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
      <div>
        <h3 className="">{t('settings.text.edit_text_color')}</h3>
        <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
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
      <CustomPropertyInput
        title={t('settings.properties.margin_top')}
        onChange={setMarginTop}
        value={marginTop}
        max={64}
        min={5}
      />
      <CustomPropertyInput
        title={t('settings.properties.margin_bottom')}
        onChange={setMarginBottom}
        value={marginBottom}
        max={64}
        min={5}
      />
    </div>
  );
};
