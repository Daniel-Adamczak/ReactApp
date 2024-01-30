
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UsersContext';
export const ManageAccount = () => {
    const [ifShowMenu,setIfShowMenu]=useState(false);
  const { authenticatedUser } = useUser();


  return (
    <div className='flex flex-col'>
      {
        <div className='flex flex-row align-text-bottom border border-2 border-slate-700 hover:border-[#ffc600] hover:text-[#ffc600] rounded-xl bg-slate-black p-2 font-bold gap-2 mr-5' onClick={()=>setIfShowMenu(prev=>!prev)}>
          
          <img
            src={authenticatedUser?.image}
            alt='Users image'
            className='h-6'
          />
          <h3 className='capitalize'>{authenticatedUser?.firstName +' ' +authenticatedUser?.lastName}</h3>
        </div>
      }
    </div>
  );
};
