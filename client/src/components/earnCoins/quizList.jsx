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
      questions: [],
      quizzes: [],
    }
  }
  componentDidMount(){
    axios.get("https://next-world.herokuapp.com/questions/")
    .then(question => {
      this.setState({
        questions: question.data
      })//end of this.setSTate
    })//end of .then statement
    .catch(error => {
      console.log(error)
    })//end of catch block


    axios.get("http://localhost:5000/quizzes/")
    .then(question => {
      this.setState({
        quizzes: (question.data.Questions[0].Question)
      })//end of this.setSTate
    })//end of .then statement
    .catch(error => {
      console.log(error)
    })//end of catch block

  }//componentDidMount
  quizQuestion(){
    return this.state.questions.map( question =>{
      return (
        <div className = "text-center">
        <h1>{question.Question}</h1>
        <p>{question.Option1}</p>
        <p>{question.Option2}</p>
        <p>{question.Option3}</p>
        <p>{question.Option4}</p>
        <p>{question.CorrectOption}</p>
    </div>
      )//end of inner return
    })//end of outer return
}//end of quizQuestion

render(){
  return(
    <div>
    <Header/>
    {this.quizQuestion()}
    <h1>{this.state.quizzes}</h1>
    <Footer/>
    </div>
  )//end of return
}//end of return

}
