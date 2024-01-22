import React, { useEffect, useState } from 'react'
import { emptyUser,UserType } from '../../../../context/UsersContext';
import { UserCardWrapper } from './UserCardWrapper';

export type CommentUserType = {
    id: number;
    username: string;
  };
  
 export type CommentType = {
    id: number;
    body: string;
    postId: number;
    user: CommentUserType;
  };
interface SingleCommentProps {
    comment: CommentType;
  }
export const SingleComment: React.FC<SingleCommentProps> = ({comment}) => {
    const [author,setAuthor]=useState<UserType>(emptyUser)

    useEffect(() => {
        
          fetch(`https:dummyjson.com/users/${comment.user.id}`)
            .then((response) => response.json())
            .then((data) => setAuthor(data))
            .catch((error) => console.error('Error fetching user data:', error));
        }
      , [comment]);
  return (
    <UserCardWrapper userId={comment.user.id}>
                
                <p>{comment.body}</p>
                </UserCardWrapper>
  )
}
