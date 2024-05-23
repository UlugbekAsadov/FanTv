import { ColorPicker } from '@/components/tools/color-picker';
import { CustomSelect } from '@/components/tools/custom-select';
import { MediaUploader } from '@/components/tools/media-uploader';
import { PositionSelectSetting } from '@/components/tools/position-select-setting';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocaleContext } from '@/context/locale.context';
import { useBlockValues } from '@/hooks/useBlockValues';
import {
  defaultBorderRadius,
  defaultFontSizes,
  defaultWidth,
} from '@/utils/mocks/properties.mock';
import { Positions } from '@/utils/types/properties.type';

export const LinkSetting = () => {
  const { t } = useLocaleContext();
  const [text, setText] = useBlockValues('text');
  const [bgColor, setBgColor] = useBlockValues('backgroundColor');
  const [color, setColor] = useBlockValues('color');
  const [href, setHref] = useBlockValues('link');
  const [borderRadius, setBorderRadius] = useBlockValues('borderRadius');
  const [fontSize, setFontSize] = useBlockValues('fontSize');
  const [width, setWidth] = useBlockValues('width');
  const [position, setPosition] = useBlockValues<Positions>('position');
  const [blockPosition, setBlockPosition] =
    useBlockValues<Positions>('blockPosition');
  const [bgImage, setBgImage] = useBlockValues('backgroundImage');

  return (
    <div className="flex flex-col space-y-3">
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

      <Tabs defaultValue={bgImage ? 'image' : 'color'}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="color">{t('settings.link.color')}</TabsTrigger>
          <TabsTrigger value="image">{t('settings.link.image')}</TabsTrigger>
        </TabsList>
        <TabsContent value="color">
          <ColorPicker
            title={t('settings.link.edit_link_bg_color')}
            color={bgColor}
            onChange={(color) => setBgColor(color.hex)}
          />
        </TabsContent>
        <TabsContent value="image">
          <MediaUploader value={bgImage} onChange={setBgImage} />
        </TabsContent>
      </Tabs>

      <ColorPicker
        title={t('settings.link.edit_link_color')}
        color={color}
        onChange={(color) => setColor(color.hex)}
      />

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
        value={blockPosition}
        onChange={setBlockPosition}
      />
    </div>
  );
};
