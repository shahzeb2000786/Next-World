import React, {Component, useContext} from "react"
import CSS from "../css/styles.css"
import Header from "../header.jsx"
import Footer from "../footer.jsx"
import axios from "axios"
import StatsCard from "../StatsCard.jsx"

export default class EarnCoinsCarousel extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser:  JSON.stringify({_id: 1, Name: "Guest User", Belt: "White", Age: "8", Coins: "1000"})
    }//end of this.state
  }//end of construc tor
  render(){
    return(
<div>
      <Header/>
        <div className = "text-center ">
        <a href="/viewUsers">
          <h1>  Take Quizzes</h1>
        </a>
        </div>

      <Footer/>
      </div>
    )//end of return
  }//end of erender
}//end of QuizzesList class component
