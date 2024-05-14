import Link from 'next/link';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}

export const LinkBlog = ({ addedBlog }: IProps) => {
  const { color, text, backgroundColor, type, id, link } = addedBlog;
  const { handleClickBlogOnScreen, editingId } = usePhoneContext();

  return (
    <div className="relative">
      <Link
        className="block  min-h-[56px] h-full w-full rounded-2xl"
        href={link || '#'}
      >
        <div
          onClick={handleClickBlogOnScreen.bind(null, type, id)}
          style={{ background: backgroundColor, color }}
          className="w-full rounded-2xl text-center px-4 py-4 break-before-all h-full"
        >
          {text}
        </div>
      </Link>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
