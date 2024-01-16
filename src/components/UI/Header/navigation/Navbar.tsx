import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <ul className='flex flex-row gap-3 text-slate-400'>
            <li>Products</li>
            <li>Users</li>
            <li>Recipes</li>
            <li>Blog</li>
        </ul>
    </nav>
  )
}
