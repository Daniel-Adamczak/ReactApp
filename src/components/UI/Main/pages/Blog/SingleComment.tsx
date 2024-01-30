import React from 'react';

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
export const SingleComment: React.FC<SingleCommentProps> = ({ comment }) => {
 
 
  return (
    <UserCardWrapper userId={comment.user.id}>
      <p>{comment.body}</p>
    </UserCardWrapper>
  );
};
