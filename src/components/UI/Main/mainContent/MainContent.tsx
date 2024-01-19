import { useContext, useEffect, useState } from 'react';
import { useBlog, PostType } from '../../../context/BlogContext';

export const MainContent = () => {
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
      if(selectedPost){fetch(`https:dummyjson.com/posts/${selectedPost}`)
        .then((response) => response.json())
        .then((data) => setCurrentPost(data))
        .catch(error => console.error('Error fetching posts:', error));}
    }, [selectedPost]);
  return (
    <section>
      <h1>MainContent</h1>
      
      <div>
        <div key={post.id}>
          <h2 className=''>{post.tags}</h2>
          <p>{post.body}</p>
        </div>
        {commentsList
          .filter((comment) => comment.postId === selectedPost)
          .map((comment) => (
            <div className='my-2 p-3 ml-5 bg-slate-700 text-slate-400 rounded-xl'>
             <h2>{comment.name}</h2>
             <h5>Author: {comment.email}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
