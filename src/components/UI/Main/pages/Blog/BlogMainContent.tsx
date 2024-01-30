import { useBlog } from '../../../../context/BlogContext';

import { SinglePost } from './SinglePost';

export const BlogMainContent = () => {
  const { post: selectedPost } = useBlog();

  return (
    <section>
      <SinglePost selectedPost={selectedPost} />
    </section>
  );
};
