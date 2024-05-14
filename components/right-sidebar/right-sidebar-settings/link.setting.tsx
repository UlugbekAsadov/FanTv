import { ColorPicker } from '@/components/color-picker';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';

export const LinkSetting = () => {
  const { t } = useLocaleContext();
  const [text, setText] = useBlogValues('text');
  const [bgColor, setBgColor] = useBlogValues('backgroundColor');
  const [color, setColor] = useBlogValues('color');
  const [href, setHref] = useBlogValues('link');

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
      </div>
    </div>
  );
};
