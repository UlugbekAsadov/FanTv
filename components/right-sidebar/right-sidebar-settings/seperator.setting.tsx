import { ColorPicker } from '@/components/color-picker';
import { CurstomPropertyInput } from '@/components/custom-property-input';
import { CustomSelect } from '@/components/custom-select';
import { PositionSelectSetting } from '@/components/position-select-setting';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';
import { defaultWidth } from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const SeperatorSetting = () => {
  const { t } = useLocaleContext();
  const [bgColor, setBgColor] = useBlogValues('backgroundColor');
  const [width, setWidth] = useBlogValues('width');
  const [blogPosition, setBlogPosition] =
    useBlogValues<Positions>('blogPosition');
  const [marginTop, setMarginTop] = useBlogValues('marginTop');
  const [marginBottom, setMarginBottom] = useBlogValues('marginBottom');

  return (
    <div>
      <div className="py-2 border-b p-3">
        <h3 className="text-center">{t('settings.seperator.edit_seperator')}</h3>
      </div>
      <div className="px-4 flex flex-col space-y-3">
        <div>
          <h3 className="">{t('settings.seperator.edit_seperator_color')}</h3>
          <ColorPicker
            color={bgColor}
            onChange={(color) => setBgColor(color.hex)}
          />
        </div>
        <CustomSelect
          title={t('settings.properties.width')}
          value={width}
          onChange={setWidth}
          values={defaultWidth}
          unit="%"
        />
        <PositionSelectSetting
          title={t('settings.properties.content_position')}
          value={blogPosition}
          onChange={setBlogPosition}
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
    </div>
  );
};
