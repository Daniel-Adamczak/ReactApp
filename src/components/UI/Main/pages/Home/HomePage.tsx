import React from 'react';
import { useUser } from '../../../../context/UsersContext';
import { RegisterForm } from './RegisterForm';
import { GetRandomUserData } from './GetRandomUserData';
import { HomePageMainContent } from './HomePageMainContent';
export const HomePage = () => {
  const {authenticatedUser}= useUser();
  return (
    <div className=' min-h-[90vh] p-16 shadow-[0_0_10px_10px] shadow-blue-950'>

     { !authenticatedUser && (<div><RegisterForm />
      <GetRandomUserData/></div>)}

      { authenticatedUser && <HomePageMainContent />}

    </div>
  );
};
