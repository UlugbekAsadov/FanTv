import { ColorResult } from 'react-color';

import { ColorPicker } from '@/components/color-picker';
import { usePhoneContext } from '@/context/phone.context';

export const SolidColor = () => {
  const { template, handleChangeBackgroundColor } = usePhoneContext();

  const handleChangeColor = (color: ColorResult) => {
    handleChangeBackgroundColor(color.hex);
  };

  return (
    <ColorPicker color={template.background} onChange={handleChangeColor} />
  );
};
