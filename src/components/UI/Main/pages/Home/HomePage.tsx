import React from 'react';

import { RegisterForm } from './RegisterForm';
import { GetRandomUserData } from './GetRandomUserData';
export const HomePage = () => {
  return (
    <div className=' min-h-[90vh] p-16 shadow-[0_0_10px_10px] shadow-blue-950'>
      <RegisterForm />
      <GetRandomUserData/>
    </div>
  );
};
