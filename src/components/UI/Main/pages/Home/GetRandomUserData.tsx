import React from 'react'
import { useUser } from '../../../../context/UsersContext'

export const GetRandomUserData = () => {
    const {setUsersId}=useUser();
 
    const handleGetRandomUser = () => {
        setUsersId(Math.floor(Math.random()*101));
        
    };

    return (
        <div className='absolute top-52 right-36 p-3 rounded-xl bg-slate-300  opacity-70 text-lg p-6 flex flex-col  font-semibold gap-3'>
            <h2>Register with random users data</h2>
            <button className='border rounded-md p-1 border-violet-600 hover:text-[#ffc600] hover:bg-black' onClick={handleGetRandomUser}>Get Random User</button>
        </div>
    );
};
