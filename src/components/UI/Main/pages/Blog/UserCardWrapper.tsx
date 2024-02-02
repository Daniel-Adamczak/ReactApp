import React, { useEffect, useState, ReactNode } from 'react';
import { UserType } from '../../../../context/UsersContext';

interface UserCardProps {
  userId: number;
  children?: ReactNode;
}

export const UserCardWrapper: React.FC<UserCardProps> = ({
  userId,
  children,
}) => {
  const [author, setAuthor] = useState<UserType>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        
      }
    };
  
    if (userId !== 0) {
      fetchUser();
    }
  }, [userId]);
  
  return (
    <div className='bg-slate-700 text-slate-400 rounded-xl p-3 m-2  '>
     {author && <div className='flex flex-row gap-3 border-b-slate-400 border-b mb-2 align-bottom'>
        <img src={author.image} alt='' className='h-8' />
        <h2 className='text-2xl font-bold'>{author.username}</h2>
        <span className='flex font-light text-lg'>
          {author.firstName + ' ' + author.lastName}
        </span>
      </div>}

      {children}
    </div>
  );
};
