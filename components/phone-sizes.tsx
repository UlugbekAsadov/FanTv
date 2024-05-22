'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePhoneContext } from '@/context/phone.context';
import { phoneSizes } from '@/utils/mocks/phone-sizes.mock';

export const PhoneSizes = () => {
  const { setCurrentScreenSize } = usePhoneContext();

  const onChangeScreenSize = (model: string) => {
    const selectedSize = phoneSizes.find((phone) => phone.model === model)!;

    if (!selectedSize) {
      throw Error('Phone model not found');
    }

    setCurrentScreenSize(selectedSize);
  };

  const renderValues = phoneSizes.map((size, index) => (
    <SelectItem key={index} value={size.model}>
      {size.model}
    </SelectItem>
  ));

  return (
    <Select
      onValueChange={onChangeScreenSize}
      defaultValue={phoneSizes[0].model}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Screen Sizes" />
      </SelectTrigger>
      <SelectContent>{renderValues}</SelectContent>
    </Select>
  );
};
