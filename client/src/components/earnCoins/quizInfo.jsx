

import React, {Component, useContext} from "react"
import CSS from "../css/styles.css"
import Header from "../header.jsx"
import Footer from "../footer.jsx"
import axios from "axios"
import StatsCard from "../StatsCard.jsx"


export default class QuizList extends Component{
  constructor(props){
    super(props)
    this.state = {
      quiz: [],
    }
  }


  componentDidMount(){
    console.log(this.props.match.params.id)
    console.log("Hello")
    axios.get("https://next-world.herokuapp.com/quizzes/" + this.props.match.params.id.toString())
    .then(quizInfo => {
    //  console.log(quizzes.data)
    console.log(quizInfo.data)
      this.setState({
        quiz: quizInfo.data
      })//end of this.setSTate
    })//end of .then statement
    .catch(error => {
      console.log(error)
    })//end of catch block
  }//componentDidMount



render(){
  return(
    <div>
    <Header/>
    <div className = "quiz-info pt-3 mb-5 mt-5">
    <div className = "text-center">
    <h1 className = "pb-4 pt-3 quiz-info-text">{this.state.quiz.QuizName}</h1>
    <h1 className = "pb-4 quiz-info-text">Difficulty: {this.state.quiz.Difficulty}</h1>
    <h1 className = "pb-4 quiz-info-text">Prize: {this.state.quiz.Prize}</h1>
    <a href = {"/quiz-questions/" + this.state.quiz._id} className = "btn btn-primary mb-5">Begin</a>
    </div>
    </div>
    <Footer/>
    </div>
  )//end of return
}//end of return

}
