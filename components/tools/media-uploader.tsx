import { PlusIcon } from 'lucide-react';
import { useRef } from 'react';

import { useLocaleContext } from '@/context/locale.context';

interface IProps {
  value: string | number | readonly string[] | undefined;
  onChange: (url: string) => void;
}

export const MediaUploader = ({ onChange, value }: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useLocaleContext();
  const handleClickInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeInput = (e: any) => {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      onChange(file);
    }
  };

  return (
    <div
      className="w-full rounded-xl border h-[150px] flex-col border-red-400 hover:bg-muted cursor-pointer transition flex items-center justify-center "
      onClick={handleClickInput}
    >
      <PlusIcon width={64} className="text-red-500" />
      <p className="w-3/4 text-center text-gray-400 mx-auto text-sm">
        {t('settings.profile.upload_image')}
      </p>
      <input
        hidden
        type="file"
        ref={inputRef}
        onChange={handleChangeInput}
        value={value}
        accept="image/png, image/gif, image/jpeg"
      />
    </div>
  );
};
