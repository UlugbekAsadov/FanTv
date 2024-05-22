import { TrashIcon } from 'lucide-react';

import { usePhoneContext } from '@/context/phone.context';

interface IProps {
  blogId: string | null;
}

export const BlogActions = ({ blogId }: IProps) => {
  const { handleRemoveBlog } = usePhoneContext();

  if (!blogId) {
    return null;
  }

  return (
    <div
      onClick={handleRemoveBlog.bind(null, blogId)}
      className="absolute -left-24 top-0 bg-white rounded-full border p-3 group  cursor-pointer"
    >
      <TrashIcon className="text-gray-300 transition group-hover:text-black" />
    </div>
  );
};
