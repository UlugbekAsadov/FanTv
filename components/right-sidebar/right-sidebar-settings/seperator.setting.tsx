import { ColorPicker } from '@/components/color-picker';
import { CurstomPropertyInput } from '@/components/custom-property-input';
import { CustomSelect } from '@/components/custom-select';
import { PositionSelectSetting } from '@/components/position-select-setting';
import { useLocaleContext } from '@/context/locale.context';
import { useBlockValues } from '@/hooks/useBlockValues';
import { defaultWidth } from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const SeparatorSetting = () => {
  const { t } = useLocaleContext();
  const [bgColor, setBgColor] = useBlockValues('backgroundColor');
  const [width, setWidth] = useBlockValues('width');
  const [blockPosition, setBlockPosition] =
    useBlockValues<Positions>('blockPosition');
  const [marginTop, setMarginTop] = useBlockValues('marginTop');
  const [marginBottom, setMarginBottom] = useBlockValues('marginBottom');

  return (
    <div className="flex flex-col space-y-3">
      <ColorPicker
        title={t('settings.Separator.edit_Separator_color')}
        color={bgColor}
        onChange={(color) => setBgColor(color.hex)}
      />
      <CustomSelect
        title={t('settings.properties.width')}
        value={width}
        onChange={setWidth}
        values={defaultWidth}
        unit="%"
      />
      <PositionSelectSetting
        title={t('settings.properties.content_position')}
        value={blockPosition}
        onChange={setBlockPosition}
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
    </div>
  );
};
