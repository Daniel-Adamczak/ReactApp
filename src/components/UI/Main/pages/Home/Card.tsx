import React, { ReactNode } from 'react'

interface CardProps {
  
    children?: ReactNode;
  }

export const Card:React.FC<CardProps> = ({children}) => {
  return (
    <div className='h-96 w-96 rounded-xl p-3 bg-slate-700 flex flex-col justify-around align-middle items-center  border-4 border-slate-600 hover:border-slate-400'>{children}</div>
  )
}
