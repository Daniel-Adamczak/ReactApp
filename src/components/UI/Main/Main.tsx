import React from 'react'
import { SideBar } from './sidebar/SideBar'
import { MainContent } from './mainContent/MainContent'

export const Main = () => {
  return (
    <main className=' grid grid-cols-4 '>
      <div className=' col-span-1'><SideBar /></div>
       <div className='col-span-3 bg-red-800 '><MainContent /></div> 
       
        
    </main>
  )
}
