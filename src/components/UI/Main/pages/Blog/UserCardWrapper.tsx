import React, { useEffect, useState, ReactNode } from 'react';
import { UserType, emptyUser } from '../../../../context/UsersContext';

interface UserCardProps {
  userId: number;
  children?: ReactNode;
}

export const UserCardWrapper: React.FC<UserCardProps> = ({
  userId,
  children,
}) => {
  const [author, setAuthor] = useState<UserType>(emptyUser);

  useEffect(() => {
    fetch(`https:dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userId]);
  return (
    <div className='bg-slate-700 text-slate-400 rounded-xl p-3 m-2  '>
      <div className='flex flex-row gap-3 border-b-slate-400 border-b mb-2 align-bottom'>
        <img src={author.image} alt='' className='h-8' />
        <h2 className='text-2xl font-bold'>{author.username}</h2>
        <span className='flex font-light text-lg'>
          {author.firstName + ' ' + author.lastName}
        </span>
      </div>

      {children}
    </div>
  );
};
