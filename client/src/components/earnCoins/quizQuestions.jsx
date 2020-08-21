import React, {Component, useContext} from "react"
import CSS from "../css/styles.css"
import Header from "../header.jsx"
import Footer from "../footer.jsx"
import axios from "axios"
import StatsCard from "../StatsCard.jsx"

export default class QuizQuestions extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      questions: []
    }
  }

//componentDIdMount makes a get request using express url parameters to get back questions for a specific quiz
// and sets the "questions" state value equal to the questions receieved from the get request
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

  onSubmit(e){
    e.preventDefault();
    let quizQuestions = (document.getElementsByName("selectedOption"))
    quizQuestions.forEach((question, index) => {
      if (question.id != null){
         //console.log((question.option[2].checked))
        for (var optionNumber in question.option){///question.option refers to the name give nto each of the radio buttons in each form which is "option"
          let possibleOption = (question.option[optionNumber])
            if (possibleOption.checked == true  && question.id == possibleOption.value){
              console.log("YOur answer was " + possibleOption.value)
              console.log("The correct answer was " +  question.id)
              console.log(possibleOption.value == question.id)
            }//if
        }//for
      }//if
    });//foreach

  }//onSubmit

quizQuestionList(){
  return this.state.questions.map(question => {
    return (
  <div className = "mb-3 mt-3">
    <div className = " card-color question-div pb-2  pt-2">
      <form onSubmit = {this.onSubmit} className = "pl-3 pr-3" id = {question.CorrectOption} name="selectedOption">
      <div className = "text-center">
      <h5>{question.Question}</h5>
      </div>
      <input  type="radio" name="option" value={question.Option1} /> {"A. " + question.Option1}
      <br></br>
      <input type="radio" name="option" value={question.Option2} /> {"B. " + question.Option2}
      <br></br>
      <input type="radio" name="option" value={ question.Option3}/> {"C. " + question.Option3}
      <br></br>
      <input type="radio" name="option" value={question.Option4} /> {"D. " + question.Option4}
      <br></br>
      <button className = "btn btn-primary" type = "submit">Submit</button>
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
