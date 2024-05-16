import Link from 'next/link';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}

export const LinkBlog = ({ addedBlog }: IProps) => {
  const {
    color,
    text,
    backgroundColor,
    type,
    id,
    link,
    borderRadius,
    fontSize,
    width,
    position,
    blogPosition,
    marginBottom,
    marginTop
  } = addedBlog;
  const { handleClickBlogOnScreen, editingId } = usePhoneContext();

  return (
    <div className="relative">
      <Link
        className="  min-h-[56px] h-full overflow-hidden w-full flex flex-col"
        href={link || '#'}
        style={{
          alignItems: blogPosition,
        }}
      >
        <div
          onClick={handleClickBlogOnScreen.bind(null, type, id)}
          style={{
            background: backgroundColor,
            color,
            width: `${width}%`,
            textAlign: position,
            fontSize: `${fontSize}px`,
            borderRadius: `${borderRadius}px`,
            marginBottom: `${marginBottom}px`,
            marginTop: `${marginTop}px`,
          }}
          className="w-full px-4 py-4 break-before-all h-full"
        >
          {text}
        </div>
      </Link>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
