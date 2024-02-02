import React, { createContext, useContext, useEffect, useState } from 'react';

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
};

export type BlogContextType = {
  posts: LimitPostType | undefined;
  comments: CommentType[];
  setPosts: (posts: LimitPostType) => void;
  setComments: (comments: CommentType[]) => void;
  post: number;
  setPost: (post: number) => void;
  page: number;
  setPage: (page: number) => void;
  error: string;
  setError: (error: string) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

type BlogProviderType = {
  children: React.ReactNode;
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }: BlogProviderType) => {
  const [postsList, setPostsList] = useState<LimitPostType>({
    posts: [],
    total: 0,
    skip: 0,
    limit: 10,
  });
  const [commentsList, setCommentsList] = useState<CommentType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts?limit=10&skip=${(pageNumber - 1) * 10}&select=title,reactions,userId`
        );
        if (!response.ok) {
          throw new Error('Problem fetching posts');
        }
        const data = await response.json();
        setPostsList(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };
  
    fetchPosts();
  }, [pageNumber]);
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
          throw new Error('Problem fetching comments');
        }
        const data = await response.json();
        setCommentsList(data);
      }catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchComments();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts: postsList,
        setPosts: setPostsList,
        comments: commentsList,
        setComments: setCommentsList,
        post: selectedPost,
        setPost: setSelectedPost,
        page: pageNumber,
        setPage: setPageNumber,
        error: error,
        setError: setError,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
