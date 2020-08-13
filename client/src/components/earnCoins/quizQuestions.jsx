import React, {Component, useContext} from "react"
import CSS from "../css/styles.css"
import Header from "../header.jsx"
import Footer from "../footer.jsx"
import axios from "axios"
import StatsCard from "../StatsCard.jsx"

export default class QuizQuestions extends Component{
  constructor(props){
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    console.log ( "Hello")
    axios.get("https://next-world.herokuapp.com/quizzes/" + this.props.match.params.id.toString())
    .then(quiz => {
      this.setState({
        questions: quiz.data.Questions
      })//this.setState
      console.log(this.state.questions)
    })//.then
    .catch(err => ("Error could not get item: "+ err))
  }//componentdidmount

quizQuestionList(){
  return this.state.questions.map(question => {
    return (
  <div className = "mb-3 mt-3">
    <div className = "text-center card-width card-color">
      <form id = {question.CorrectOption} name="selectedOption">
      <h4>{question.Question}</h4>
      <input type="radio" name="option" value={question.Option1} /> {question.Option1}
      <br></br>
      <input type="radio" name="option" value={question.Option1} /> {question.Option2}
      <br></br>
      <input type="radio" name="option" value={question.Option1}/> {question.Option3}
      <br></br>
      <input type="radio" name="option" value={question.Option1} />{question.Option4}
      <br></br>
      </form>
    </div>
  </div>
    )
  })
}
  render(){
    return(
      <div>
      <Header/>
      {this.quizQuestionList()}
      <Footer/>
      </div>
    )//return
  }//render
}
