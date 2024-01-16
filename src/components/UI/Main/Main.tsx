import React from 'react'
import { SideBar } from './sidebar/SideBar'
import { MainContent } from './mainContent/MainContent'

export const Main = () => {
  return (
    <main className=' grid grid-cols-4 h-full'>
       <div className='col-span-3 bg-red-800 h-15'><MainContent /></div> 
        <div className='h-15 bg-blue-900  col-span-1'><SideBar /></div>
    </main>
  )
}
