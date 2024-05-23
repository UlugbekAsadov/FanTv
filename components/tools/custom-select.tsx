import { ReactNode } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface IProps {
  values: number[];
  value: string;
  onChange: (value: string) => void;
  title: ReactNode;
  unit?: string;
}

export const CustomSelect = ({
  value,
  values,
  onChange,
  title,
  unit = 'px',
}: IProps) => {
  const renderValues = values.map((value, index) => (
    <SelectItem key={index} value={value.toString()}>
      {value}
      {unit}
    </SelectItem>
  ));

  return (
    <div className="flex items-center justify-between gap-2">
      <p className="flex-grow">{title}</p>
      <Select
        defaultValue={value}
        value={value}
        onValueChange={(changedValue) => onChange(changedValue)}
      >
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>{renderValues}</SelectContent>
      </Select>
    </div>
  );
};
