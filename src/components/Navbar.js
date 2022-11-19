import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

//styles
import './Navbar.css'

export default function Navbar() {
  const {logout}= useLogout()
  const {user}= useAuthContext()
  return (
    <nav className='navbar'>
      <div className="navbar__list">
      <span className='title'>Fintrack</span>
      {!user && (
      <>
       <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
      )}
       
       {user && (
        <>
        <p>welcome, <span className='display_name'>{user.displayName}</span></p>
        <button className='btn-nav' onClick={logout}>Logout</button>
        </>
        )}
      </div>
      
       

       
      
    </nav>
  )
}
