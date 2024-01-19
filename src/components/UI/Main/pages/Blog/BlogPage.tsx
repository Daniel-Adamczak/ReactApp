import React from 'react';
import { BlogMainContent } from './BlogMainContent';
import { BlogSideBar } from './BlogSideBar';

export const BlogPage = () => {
  return (
    <div className=' grid grid-cols-4 gap-2'>
      <div className=' col-span-1'>
        <BlogSideBar />
      </div>
      <div className='col-span-3  '>
        <BlogMainContent />
      </div>{' '}
    </div>
  );
};
