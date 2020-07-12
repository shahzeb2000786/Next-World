import React, {Component, useState} from "react";//imports useState and components which allows reacgt compoennts to be rendered and useState allows reacthooks and react context to be available to use
import logo from './logo.svg';
import Leaderboard from "./components/leaderboard.jsx";
import SignUp from "./components/signup.jsx"
import ViewUsers from "./components/viewusers.jsx"
import carousel from "./components/carousel.jsx"
import AddItem from "./components/additem.jsx"
import Inventory from "./components/inventory.jsx"
import Profile from "./components/profile.jsx"
import Store from "./components/store.jsx"

import {BrowserRouter as Router, Route} from "react-router-dom"//imports Browser Router in the form of Router and route from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"//requires the normal bootstrap that was installed
import './App.css';



function App(){


    return(

      <Router>
     <Route path = "/" exact component = {Leaderboard}/>
     <Route path = "/viewusers" exact component = {ViewUsers}/>
     <Route path = "/inventory" exact component = {Inventory}/>
     <Route path = "/store" exact component = {Store}/>

     <Route path = "/additem" exact component = {AddItem}/>

     <Route path = "/profile" exact component = {Profile}/>
     <Route path = "/signup" exact component = {SignUp}/>

       </Router>
    )
  }

export default App
