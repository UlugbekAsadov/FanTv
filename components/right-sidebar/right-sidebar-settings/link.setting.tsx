import { ColorPicker } from '@/components/color-picker';
import { CustomSelect } from '@/components/custom-select';
import { PositionSelectSetting } from '@/components/position-select-setting';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';
import {
  defaultBorderRadius,
  defaultFontSizes,
  defaultWidth,
} from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const LinkSetting = () => {
  const { t } = useLocaleContext();
  const [text, setText] = useBlogValues('text');
  const [bgColor, setBgColor] = useBlogValues('backgroundColor');
  const [color, setColor] = useBlogValues('color');
  const [href, setHref] = useBlogValues('link');
  const [borderRadius, setBorderRadius] = useBlogValues('borderRadius');
  const [fontSize, setFontSize] = useBlogValues('fontSize');
  const [width, setWidth] = useBlogValues('width');
  const [position, setPosition] = useBlogValues<Positions>('position');
  const [blogPosition, setBlogPosition] =
    useBlogValues<Positions>('blogPosition');

  return (
    <div>
      <div className="py-2 border-b p-3">
        <h3 className="text-center">{t('settings.link.edit_link')}</h3>
      </div>
      <div className="px-4 flex flex-col space-y-3">
        <div>
          <h3 className="">{t('settings.link.edit_link_text')}</h3>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h3 className="">{t('settings.link.edit_link_href')}</h3>
          <Input
            type="text"
            value={href}
            onChange={(e) => setHref(e.target.value)}
          />
        </div>
        <div>
          <h3 className="">{t('settings.link.edit_link_bg_color')}</h3>
          <ColorPicker
            color={bgColor}
            onChange={(color) => setBgColor(color.hex)}
          />
        </div>
        <div>
          <h3 className="">{t('settings.link.edit_link_color')}</h3>
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        </div>
        <CustomSelect
          title={t('settings.properties.border_radius')}
          value={borderRadius}
          onChange={setBorderRadius}
          values={defaultBorderRadius}
        />
        <CustomSelect
          title={t('settings.properties.font_size')}
          value={fontSize}
          onChange={setFontSize}
          values={defaultFontSizes}
          unit="px"
        />
        <CustomSelect
          title={t('settings.properties.width')}
          value={width}
          onChange={setWidth}
          values={defaultWidth}
          unit="%"
        />
        <PositionSelectSetting
          title={t('settings.properties.text_align')}
          value={position}
          onChange={setPosition}
        />
        <PositionSelectSetting
          title={t('settings.properties.content_position')}
          value={blogPosition}
          onChange={setBlogPosition}
        />
      </div>
    </div>
  );
};
