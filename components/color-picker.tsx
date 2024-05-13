import { PaintbrushIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { Color, ColorChangeHandler, SketchPicker } from 'react-color';

interface IProps {
  color?: Color;
  onChange?: ColorChangeHandler;
}

export const ColorPicker = ({ color, onChange }: IProps) => {
  const colorInputRef = useRef(null);
  const [isColorPickerHidden, setIsColorPickerHidden] = useState(false);

  const toggleColorPickerVisibility = () => {
    setIsColorPickerHidden((prevVal) => !prevVal);
  };

  return (
    <div>
      <div className="border rounded-md p-2 flex items-center gap-2 ">
        <PaintbrushIcon />
        <div
          style={{ background: color as string }}
          className="flex-grow border rounded-2xl h-8 cursor-pointer"
          onClick={toggleColorPickerVisibility}
        ></div>
      </div>
      {isColorPickerHidden && (
        <SketchPicker
          ref={colorInputRef}
          disableAlpha
          className="!w-[245px]"
          color={color}
          onChange={onChange}
        />
      )}
    </div>
  );
};
