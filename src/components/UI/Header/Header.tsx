import React from 'react'
import { Navbar } from './navigation/Navbar'

export const Header = () => {
  return (
    <header className='flex flex-row justify-between text-slate-400 p-3 shadow-[0_0_20px_gray] mb-4'>
      <div className='flex flex-row gap-3'>
      <img src="../../../../public/vite.svg" alt="" className='h-7'/>
      <img src="../../../../public/React.png" alt="" className='h-7'/>
      <img src="../../../../public/typescript.svg" alt="" className='h-7'/>
      <img src="../../../../public/tailwind.png" alt="" className='h-7'/>
      <img src="../../../../public/ReactRouter.png" alt="" className='h-7'/>
      </div>
        
        <h1>My company</h1>
        <Navbar />
    </header>
  )
}
