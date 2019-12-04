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
          <div className="pure-menu-list">
          <Link to="/" className="pure-menu-link">Home</Link>
          <Link to="/signup" className="pure-menu-link">Signup</Link>
          <Link to="/login" className="pure-menu-link">Login</Link>
          <Link to="/" onClick={handleLogout} className="pure-menu-link">Logout</Link>
          </div>
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