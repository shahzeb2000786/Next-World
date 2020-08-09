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
      quizzes: [],
    }
  }
  componentDidMount(){
    axios.get("https://next-world.herokuapp.com/quizzes/")
    .then(question => {
      console.log(question.data)
      this.setState({
        quizzes: [question.data]
      })//end of this.setSTate
      this.state.quizzes.push("Hello")
      this.state.quizzes.map(quiz => {console.log(quiz.QuizName)})
    })//end of .then statement
    .catch(error => {
      console.log(error)
    })//end of catch block


  }//componentDidMount
  quizNames(){
    return this.state.quizzes.map(quiz=>{
      return(
        <div className = "text-center">
        <a href = {"/quiz-list/" + quiz._id}> {quiz.QuizName}</a>
        <h1>{quiz.QuizName}</h1>
        </div>
      )
    })
  }

render(){
  return(
    <div>
    <Header/>
    {this.quizNames()}
    <Footer/>
    </div>
  )//end of return
}//end of return

}
