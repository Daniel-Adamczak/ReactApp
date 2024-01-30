import React from 'react'
import { useUser } from '../../context/UsersContext'
export const ManageAccount = () => {
    const {authenticatedUser} = useUser();
  return (
    <div>ManageAccount</div>
  )
}
