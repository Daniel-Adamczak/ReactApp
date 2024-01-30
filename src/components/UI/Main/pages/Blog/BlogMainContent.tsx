import { useBlog } from '../../../../context/BlogContext';

import { SinglePost } from './SinglePost';

export const BlogMainContent = () => {
  const { post: selectedPost } = useBlog();

  return (
    <section>
      {selectedPost&&<SinglePost selectedPost={selectedPost} />}
    </section>
  );
};
