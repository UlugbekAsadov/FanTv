import { TrashIcon } from 'lucide-react';

import { usePhoneContext } from '@/context/phone.context';

interface IProps {
  blogId: string;
}

export const BlogActions = ({ blogId }: IProps) => {
  const { handleRemoveBlog } = usePhoneContext();

  return (
    <div className="absolute -left-24 bottom-0 bg-gray-100 rounded-full border p-3">
      <TrashIcon onClick={handleRemoveBlog.bind(null, blogId)} />
    </div>
  );
};
