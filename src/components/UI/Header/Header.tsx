import React from 'react'
import { Navbar } from './navigation/Navbar'

export const Header = () => {
  return (
    <header className='flex flex-row justify-between text-slate-400 p-3 shadow-[0_0_10px_white] mb-4'>
        <img src="" alt="" />
        <h1>My company</h1>
        <Navbar />
    </header>
  )
}
