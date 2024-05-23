import { ChangeEvent, FocusEvent, ReactNode } from 'react';

import { Input } from '../ui/input';

interface IProps {
  title: ReactNode;
  max?: number;
  min?: number;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export const CustomPropertyInput = ({
  onChange,
  title,
  value,
  max,
  min,
  type = 'string',
}: IProps) => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    onChange(value);
  };

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);

    if (!!max && value > max) {
      value = max;
    }

    if (!!min && value < min) {
      value = min;
    }

    onChange(value.toString());
  };
  return (
    <div className="flex justify-between items-center gap-1">
      <p className="flex-grow">{title}</p>
      <Input
        type={type}
        value={value}
        onBlur={handleBlurInput}
        onChange={handleChangeInput}
        className="max-w-[70px] w-full"
      />
    </div>
  );
};
