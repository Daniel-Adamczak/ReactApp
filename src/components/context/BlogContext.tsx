import React, { createContext } from 'react';
import { useContext, useEffect, useState } from 'react';

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
export type LimitPostType = {
  posts: PostType[];
  total: number;
  skip: number;
  limit: number;
}
export type BlogContextType = {
  posts: LimitPostType | undefined;
  comments: CommentType[];
  setPosts: (posts: LimitPostType) => void;
  setComments: (comments: CommentType[]) => void;
  post:number;
  setPost:(post:number)=>void;
  page:number;
  setPage:(page:number)=>void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

type BlogProviderType = {
  children: React.ReactNode;
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('Oops, there is an error with applying context');
  }
  return context;
};

export const BlogProvider = ({ children }: BlogProviderType) => {
  const [postsList, setPostsList] = useState<LimitPostType >({ posts: [], total: 0, skip: 0, limit: 10 });
  const [commentsList, setCommentsList] = useState<CommentType[]>([]);
  const [pageNumber,setPageNumber]= useState<number>(1);
const [selectedPost,setSelectedPost]=useState<number>(0);
  useEffect(() => {
    fetch(`https:dummyjson.com/posts?limit=10&skip=${((pageNumber-1)*10)}&select=title,reactions,userId`)
      .then((response) => response.json())
      .then((data) => setPostsList(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [pageNumber]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setCommentsList(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);
  return (
    <BlogContext.Provider
      value={{ posts: postsList, setPosts: setPostsList, comments: commentsList, setComments: setCommentsList, post:selectedPost, setPost:setSelectedPost, page:pageNumber, setPage:setPageNumber}}>
      {children}
    </BlogContext.Provider>
  );
};
