import { useEffect, useState } from 'react';
import { PostType } from '../../../../context/BlogContext';
import { CommentType, SingleComment } from './SingleComment';
import { UserCardWrapper } from './UserCardWrapper';

export type CommentsResponseType = {
  comments: CommentType[];
  total: number;
  skip: number;
  limit: number;
};
const defaultCommentsResponse: CommentsResponseType = {
  comments: [],
  total: 0,
  skip: 0,
  limit: 0,
};

interface SinglePostProps {
  selectedPost: number;
}

export const SinglePost: React.FC<SinglePostProps> = ({ selectedPost }) => {
  const [showComments, setShowComments] = useState(false);
  const [post, setCurrentPost] = useState<PostType>({
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [],
    reactions: 0,
  });

  const [comments, setComments] = useState(defaultCommentsResponse);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${selectedPost}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCurrentPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        
      }
    };
  
    if (selectedPost !== 0) {
      fetchPost();
    }
  }, [selectedPost]);
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${selectedPost}/comments`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
       
      }
    };
  
    if (selectedPost !== 0) {
      fetchComments();
    }
  }, [selectedPost]);
  
  const toggleComments = () => setShowComments(!showComments);
  return (
    <section>
      <UserCardWrapper userId={post.userId}>
        <p>{post.body}</p>
        <div className='my-2'>
          {post.tags.map((tag) => (
            <span className='bg-purple-700 text-slate-300 rounded-md uppercase p-1 m-1 text-sm hover:shadow-[0_0_3px_#ffc600] cursor-pointer'>
              #{tag}
            </span>
          ))}
        </div>
        <button
          onClick={toggleComments}
          className='bg-slate-700 text-slate-400  p-2 rounded-md hover:bg-slate-800 hover:text-[#ffc600]'>
          {showComments ? 'Hide comments' : 'Show comments'}
        </button>
      </UserCardWrapper>

      {showComments &&
        comments.comments.map((comment) => <SingleComment comment={comment} />)}
    </section>
  );
};
