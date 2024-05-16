import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

import { BlogActions } from './blog.actions';

interface IProps {
  addedBlog: IAddedBlog;
}

export const SeperatorBlog = ({ addedBlog }: IProps) => {
  const {
    id,
    width,
    backgroundColor,
    blogPosition,
    type,
    marginBottom,
    marginTop,
  } = addedBlog;
  const { editingId, handleClickBlogOnScreen } = usePhoneContext();

  return (
    <div
      style={{
        alignItems: blogPosition,
      }}
      className="relative flex flex-col"
    >
      <div
        onClick={handleClickBlogOnScreen.bind(null, type, id)}
        style={{
          paddingBottom: `${marginBottom}px`,
          paddingTop: `${marginTop}px`,
        }}
        className='w-full'
      >
        <div
          style={{ width: `${width}%`, backgroundColor }}
          className="h-[1px] rounded-full"
        ></div>
      </div>
      {editingId === id ? <BlogActions blogId={editingId} /> : null}
    </div>
  );
};
