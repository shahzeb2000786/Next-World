import React from "react"
import CSS from "./css/styles.css"
import { Button } from "react-bootstrap"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from "axios"

function Header(){
  //urlToRequest =  axios.get("https://next-world.herokuapp.com/users/")
  let currentUser = JSON.parse(localStorage.getItem("User"))//gets the currently signed in user from localstorage

  let userCoins = "0"
  let userName = "Guest"

  if (currentUser != null){//if there is no user currently sign in default values cut assigned
    let userCoins = currentUser.Coins//contains the user's coin amount
    let userName = currentUser.Name//contains the user's name
  }
  return (

    <div className = "header-footer-div pb-1">
    <div className="nav-item dropdown d-flex justify-content-between">

      <a className="nav-link dropdown-toggle text-white ml-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">{/*all of the hrefs in this div are part of a menu bar which users can use to navigate to different pages*/}
        <a className="dropdown-item" href="/">Home</a>
        <a className="dropdown-item" href="viewusers">View Users</a>
        <a className="dropdown-item" href="additem">Add Item</a>
      </div >
      <a className = "text-grey" href="signup">Sign Up</a>
      <a className = "text-grey" href="profile">Profile</a>
      <a  className = "text-grey" href="store">Store</a>
      <a  className = "text-grey" href="earn-coins">Earn Coins</a>



      <div className = "left-align pr-5 "> {/*this div contains the user's name and coin amount at the top right corner, and it contains an anchor tag, so when they click when they click on it it will take them to their profile page */}
      <a href = "profile">
      <p className = "text-white">  {userName}   {userCoins} 💎 </p>
      </a>
      </div>


  </div>
  <div className = "center-align">
  <h1 className="title-color text-center pb-1 pt-2">Next World</h1>{/*this is the title of the page*/}
  </div>
</div>
  )








}

export default Header;
