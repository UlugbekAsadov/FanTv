import { useState } from 'react';
import { ColorResult } from 'react-color';

import { ColorPicker } from '@/components/tools/color-picker';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';
import { useGradientColor } from '@/hooks/useGradientColor';
import { cn } from '@/lib/utils';
import { IGradientDirection } from '@/utils/interfaces/gradient.interface';
import { gradientDirections } from '@/utils/mocks/gradient-directions.mock';

export const GradientColor = () => {
  const { t } = useLocaleContext();
  const { handleChangeBackgroundColor, template } = usePhoneContext();
  const [firstInitialColor, secondInitialColor] = useGradientColor(
    template.background
  );
  const [firstColor, setFirstColor] = useState(firstInitialColor);
  const [secondColor, setSecondColor] = useState(secondInitialColor);
  const [currentGradientDirection, setCurrentGradientDirection] =
    useState<IGradientDirection>(gradientDirections[2]);

  const handleChangeFirstColor = (color: ColorResult) => {
    setFirstColor(color.hex);
    const gradientColor = `linear-gradient(${currentGradientDirection.direction}, ${color.hex}, ${secondColor})`;
    handleChangeBackgroundColor(gradientColor);
  };

  function handleChangeSecondColor(color: ColorResult) {
    setSecondColor(color.hex);
    const gradientColor = `linear-gradient(${currentGradientDirection.direction}, ${firstColor}, ${color.hex})`;
    handleChangeBackgroundColor(gradientColor);
  }

  function handleChangeDirection(gradientDirection: IGradientDirection) {
    setCurrentGradientDirection(gradientDirection);
    const direction = gradientDirection.direction;
    const gradientColor = `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
    handleChangeBackgroundColor(gradientColor);
  }

  const renderGradientDirection = gradientDirections.map((dir, index) => {
    const isActive = dir.direction === currentGradientDirection.direction;

    return (
      <div
        key={index}
        onClick={handleChangeDirection.bind(null, dir)}
        className={cn(
          'px-2 py-1 flex cursor-pointer items-center justify-center',
          isActive && 'bg-white rounded-lg'
        )}
      >
        <dir.icon />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 items-start gap-2">
      <div className="grid grid-cols-4 gap-2 p-1 bg-muted rounded-lg">
        {renderGradientDirection}
      </div>
      <div>
        <p className="text-sm">{t('settings.background.first_color')}</p>
        <ColorPicker color={firstColor} onChange={handleChangeFirstColor} />
      </div>
      <div>
        <p className="text-sm">{t('settings.background.second_color')}</p>
        <ColorPicker color={secondColor} onChange={handleChangeSecondColor} />
      </div>
    </div>
  );
};
