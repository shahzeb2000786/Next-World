import React, {Component, useContext} from "react";



import Header from "./header.jsx";
import Footer from "./footer.jsx";
import SignUp from "./signup.jsx";//this import will allow access to the current user info if they have signed up
import CSS from "./css/styles.css";
import axios from "axios";//imports axios to make get and post requests
import StatsCard from "./StatsCard"

function Profile(){
  let user = localStorage.getItem("User")//getes the user data from the local storage ( if not user is signed in then it has a default stringifed "guest" json stored in the local storage) and then sets it equal to the user variable

  if (user == null){// if there is no current user saved in the local storage, then this if statement executes
    console.log(user)
    user = JSON.stringify({_id: 1, Name: "Guest User", Belt: "White", Age: "8", Coins: "1000"});//sets the currently null value for user equal to a "guest" user object, which is then stringifed so it can be can passed back into the StatsCard component as a prop
  }




  return(
    <div>
    <Header/>
    <StatsCard user = {JSON.parse(user)} key = {JSON.parse(user)._id}/>{/* converts the user variable to json form so it can be passed into the StatsCard component as a prop and have its properties used within the StatsCard*/}
    <Footer/>
    </div>
  )
}
export default Profile
