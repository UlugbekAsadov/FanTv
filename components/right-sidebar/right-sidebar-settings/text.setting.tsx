import { ColorPicker } from '@/components/color-picker';
import { Input } from '@/components/ui/input';
import { useLocaleContext } from '@/context/locale.context';
import { useBlogValues } from '@/hooks/useBlogValues';

export const TextSetting = () => {
  const { t } = useLocaleContext();
  const [value, onChange] = useBlogValues('text');
  const [color, setColor] = useBlogValues('color');

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
      </div>
    </div>
  );
};
