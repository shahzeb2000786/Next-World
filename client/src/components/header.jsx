import React from "react"
import CSS from "./css/styles.css"
import { Button } from "react-bootstrap"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Header(){
  
  return (

    <div className = "header-footer-div  pb-1">
    <div className="nav-item dropdown">

      <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">Home</a>
        <a className="dropdown-item" href="signup">Sign Up</a>
        <a className="dropdown-item" href="profile">Profile</a>
        <a className="dropdown-item" href="viewusers">View Users</a>
        <a className="dropdown-item" href="additem">Add Item</a>
      </div>
    </div>

 <h1 className="title-color text-center pb-4">Next World</h1>
</div>
  )








}

export default Header;
