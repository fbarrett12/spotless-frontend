import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import SidebarIcon from './SidebarIcon'


const Nav = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userActions.logoutUser())
  }

  const [isOpen, setIsOpen] = useState({
    isOpen: true
  })

  const toggleSidebar = () => {
    setIsOpen(
      {
        ...isOpen,
        isOpen: !isOpen.isOpen}
      )
  }
  
  console.log(isOpen)
  
    if (isOpen.isOpen === false){
      return (
        <SidebarIcon 
        isOpen={isOpen}
        toggleSidebar={toggleSidebar} 
        />
      )
    } else {
      return (
        <>
        <nav className="sidebar-container">
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </nav>
    
      
        <SidebarIcon 
        isOpen={isOpen}
        toggleSidebar={toggleSidebar} 
        />
        </>
      )
    }

  
}

export default Nav