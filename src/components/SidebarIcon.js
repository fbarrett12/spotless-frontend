import React from 'react'
import { FaBars, FaArrowLeft } from 'react-icons/fa'

const SidebarIcon = (props) => {
    console.log(props)
  return <span onClick={props.toggleSidebar}>
    {props.isOpen.isOpen ? <FaArrowLeft /> : <FaBars/>}
  </span>
}

export default SidebarIcon