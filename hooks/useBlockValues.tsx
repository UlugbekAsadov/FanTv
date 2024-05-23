'use client';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

export function useBlockValues<T = string>(
  field: keyof IAddedBlock
): [T, (value: T) => void, boolean] {
  const { template, setTemplate, editingBlockId } = usePhoneContext();
  const editingBlock = template.blocks.find(
    (block) => block.id === editingBlockId
  );

  if (!editingBlock) {
    throw Error('Block not found');
  }

  const value = editingBlock[field] as T;
  const onChange = (value: T | string) => {
    const blocks = template.blocks.map((block) => {
      if (block.id === editingBlockId) {
        return {
          ...block,
          [field]: value,
        };
      }
      return {
        ...block,
      };
    });

    return setTemplate((prevState) => ({
      ...prevState,
      blocks,
    }));
  };

  return [value, onChange, !value];
}
