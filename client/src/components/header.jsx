import React from "react"
import CSS from "./css/styles.css"
import { Button } from "react-bootstrap"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Header(){
  let currentUser = JSON.parse(localStorage.getItem("User"))//gets the currently signed in user from localstorage
  let userCoins = "0"
  let userName = "Guest"
  if (currentUser != null){
    let userCoins = currentUser.Coins//contains the user's coin amount
    let userName = currentUser.Name//contains the user's name
  }



  return (

    <div className = "header-footer-div pb-1">
    <div className="nav-item dropdown d-flex justify-content-between">

      <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">Home</a>
        <a className="dropdown-item" href="signup">Sign Up</a>
        <a className="dropdown-item" href="profile">Profile</a>
        <a className="dropdown-item" href="viewusers">View Users</a>
        <a className="dropdown-item" href="additem">Add Item</a>
        <a className = "dropdown-item" href="store">Store</a>
      </div >

      <a className = "text-grey" href="signup">Sign Up</a>
      <a className = "text-grey" href="profile">Profile</a>




      <a  className = "text-grey" href="store">Store</a>




      <div className = "left-align pr-5 ">
      <p className = "text-white">  {userName} </p>
      <p className = "text-white">{userCoins} 💎</p>
      </div>


  </div>
  <div className = "center-align">
  <h1 className="title-color text-center pb-1 pt-2">Next World</h1>
  </div>



</div>
  )








}

export default Header;
