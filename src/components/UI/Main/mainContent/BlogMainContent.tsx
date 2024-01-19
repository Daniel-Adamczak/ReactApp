import { useContext, useEffect, useState } from 'react';
import { useBlog, PostType } from '../../../context/BlogContext';

export const BlogMainContent = () => {
  const { comments: commentsList, post: selectedPost } = useBlog();
  
  const [post, setCurrentPost] = useState<PostType>({
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [],
    reactions: 0
  });
    useEffect(() => {
      if(selectedPost!==0){fetch(`https:dummyjson.com/posts/${selectedPost}`)
        .then((response) => response.json())
        .then((data) => setCurrentPost(data))
        .catch(error => console.error('Error fetching posts:', error));}
    }, [selectedPost]);
  return (
    <section>
      
      
      <div>
        <div className='bg-slate-700 text-slate-400 rounded-xl p-3 m-2'>
          <h2 className=''>{post.tags}</h2>
          <p>{post.body}</p>
        </div>
        {commentsList
          .filter((comment) => comment.postId === selectedPost)
          .map((comment) => (
            <div key={'comment'+comment.id} className='my-2 p-3 ml-8 mr-1 bg-slate-600 text-slate-400 rounded-xl'>
             <h2>{comment.name}</h2>
             <h5>Author: {comment.email}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
