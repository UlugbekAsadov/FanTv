import { CircleUserIcon } from 'lucide-react';
import Image from 'next/image';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}

export const ProfileBlog = ({ addedBlog }: IProps) => {
  const { id, src, text, color, fontSize, type, marginBottom, marginTop } =
    addedBlog;
  const { editingId, handleClickBlogOnScreen } = usePhoneContext();

  console.log({ src });
  return (
    <div className="relative">
      <div
        onClick={handleClickBlogOnScreen.bind(null, type, id)}
        className="flex flex-col items-center "
        style={{
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        }}
      >
        <div className="rounded-full border">
          {src ? (
            <Image
              src={src}
              alt={text as string}
              width={64}
              height={64}
              className="rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <CircleUserIcon />
            </div>
          )}
        </div>
        <p style={{ color, fontSize: `${fontSize}px` }} className="mt-2">
          {text}
        </p>
      </div>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
