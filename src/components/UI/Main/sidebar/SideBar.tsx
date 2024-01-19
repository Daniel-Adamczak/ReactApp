import React from 'react';
import { useBlog } from '../../../context/BlogContext';
export const SideBar = () => {
  const {
    posts: postsList,
    setPost: setSelectedPost,
    setPage: setPageNumber,
    page: pageNumber,
  } = useBlog();
  if (!postsList) return <h3>Loading...</h3>;

  return (
    <div>
      <div className='p-2  text-gray-400 text-2xl font-semibold m-2 rounded-xl capitalize '>
        Recent Posts:
      </div>
      <div className='p-2  text-gray-400 text-xl font-semibold m-2 rounded-xl capitalize '>
        {pageNumber > 2 && (
          <button className='m-2 p-2 bg-slate-600 rounded-full'
          onClick={()=>setPageNumber(1)}>{'<<'}</button>
        )}
        {pageNumber > 1 && (
          <button className='m-2 p-2 bg-slate-600 rounded-full'
          onClick={()=>setPageNumber(pageNumber-1)}>prev</button>
        )}
        <span className='m-2 p-2 bg-slate-600 rounded-full'>{pageNumber}</span>
        {pageNumber * 10 < postsList.total && (
          <button className='m-2 p-2 bg-slate-600 rounded-full'
          onClick={()=>setPageNumber(pageNumber+1)}>next</button>
        )}
        {pageNumber * 10 + 10 < postsList.total && (
          <button className='m-2 p-2 bg-slate-600 rounded-full'
          onClick={()=>setPageNumber(postsList.total/10)}>{'>>'}</button>
        )}
      </div>

      {postsList.posts.map((post) => (
        <h2
          className='p-2 bg-slate-600 text-gray-400 text-xl font-semibold m-2 rounded-xl capitalize hover:text-slate-600 hover:bg-gray-400'
          onClick={() => setSelectedPost(post.id)}>
          {post.title}
        </h2>
      ))}
    </div>
  );
};
