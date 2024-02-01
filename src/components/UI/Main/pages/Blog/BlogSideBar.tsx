
import { useBlog } from '../../../../context/BlogContext';
export const BlogSideBar = () => {
  const {
    posts: postsList,
    setPost: setSelectedPost,
    setPage: setPageNumber,
    page: pageNumber,
  } = useBlog();
  if (!postsList) return <h3>Loading...</h3>;

  return (
    <div className='bg-transparent p-2  border-2 border-slate-700 rounded-md shadow-md '>
      <div className='p-1  text-gray-400 text-2xl font-semibold m-1 rounded-xl capitalize '>
        Recent Posts:
      </div>
      <div className=' text-gray-400 text-md font-semibold  rounded-xl capitalize flex flex-row justify-center'>
        {pageNumber > 2 && (
          <button
            className=' p-1 rounded-full'
            onClick={() => setPageNumber(1)}>
            {'<<'}
          </button>
        )}
        {pageNumber > 1 && (
          <button
            className=' p-1  rounded-full'
            onClick={() => setPageNumber(pageNumber - 1)}>
            prev
          </button>
        )}
        <span className=' p-1  rounded-full text-slate-500'>{pageNumber}</span>
        {pageNumber * 10 < postsList.total && (
          <button
            className=' p-1  rounded-full'
            onClick={() => setPageNumber(pageNumber + 1)}>
            next
          </button>
        )}
        {pageNumber * 10 + 10 < postsList.total && (
          <button
            className=' p-1  rounded-full'
            onClick={() => setPageNumber(postsList.total / 10)}>
            {'>>'}
          </button>
        )}
      </div>

      {postsList.posts.map((post) => (
        <h2
          key={post.id}
          className='p-2 bg-slate-600 text-gray-400 text-xl font-semibold m-2 rounded-xl capitalize hover:text-slate-600 hover:bg-gray-400'
          onClick={() => setSelectedPost(post.id)}>
          {post.title}
        </h2>
      ))}
    </div>
  );
};
