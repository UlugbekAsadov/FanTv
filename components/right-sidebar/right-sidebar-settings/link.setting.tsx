import { ColorPicker } from '@/components/color-picker';
import { CustomSelect } from '@/components/custom-select';
import { MediaUplaoder } from '@/components/media-uploader';
import { PositionSelectSetting } from '@/components/position-select-setting';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [bgImage, setBgImage] = useBlogValues('backgroundImage');

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
            <MediaUplaoder value={bgImage} onChange={setBgImage} />
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
          value={blogPosition}
          onChange={setBlogPosition}
        />
      </div>
    </div>
  );
};
