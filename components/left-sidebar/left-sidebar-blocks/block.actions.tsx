import { TrashIcon } from 'lucide-react';

import { usePhoneContext } from '@/context/phone.context';

interface IProps {
  blockId: string | null;
}

export const BlockActions = ({ blockId }: IProps) => {
  const { handleRemoveBlock, isPreview } = usePhoneContext();

  if (!blockId || isPreview) {
    return null;
  }

  return (
    <div
      onClick={handleRemoveBlock.bind(null, blockId)}
      className="absolute -left-24 top-0 bg-white rounded-full border p-3 group  cursor-pointer"
    >
      <TrashIcon className="text-gray-300 transition group-hover:text-black" />
    </div>
  );
};
