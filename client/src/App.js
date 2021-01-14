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
import EarnCoinsCarousel from "./components/earnCoins/earnCoinsCarousel.jsx"
import QuizList from "./components/earnCoins/quizList.jsx"
import QuizInfo from "./components/earnCoins/quizInfo.jsx"
import QuizQuestions from "./components/earnCoins/quizQuestions.jsx"
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
     <Route path = "/earn-coins" exact component = {EarnCoinsCarousel}/>
     <Route path = "/quiz-list" exact component = {QuizList}/>
     <Route path = "/quiz-info/:id" exact component = {QuizInfo}/>
     <Route path = "/quiz-questions/:id" exact component = {QuizQuestions}/>
       </Router>
    )
  }

export default App
