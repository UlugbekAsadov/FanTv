import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}
export const TextBlog = ({ addedBlog }: IProps) => {
  const { color, text, type, id, fontSize, position, marginBottom, marginTop } =
    addedBlog;
  const { handleClickBlogOnScreen, editingId } = usePhoneContext();
  return (
    <div className="relative">
      <p
        onClick={handleClickBlogOnScreen.bind(null, type, id)}
        style={{
          color: color,
          fontSize: `${fontSize}px`,
          textAlign: position,
          marginBottom: `${marginBottom}px`,
          marginTop: `${marginTop}px`,
        }}
        className="text-center break-before-all break-words min-h-[24px] h-full"
      >
        {text}
      </p>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
