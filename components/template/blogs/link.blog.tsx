import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}

export const LinkBlog = ({ addedBlog }: IProps) => {
  const { color, text, backgroundColor, type, id } = addedBlog;
  const { handleClickBlogOnScreen, editingId } = usePhoneContext();
  return (
    <div className="relative">
      <button
        onClick={handleClickBlogOnScreen.bind(null, type, id)}
        style={{ background: backgroundColor, color }}
        className="w-full rounded-2xl px-4 py-4 break-before-all min-h-[56px] h-full"
      >
        {text}
      </button>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
