import React, {Component, useContext} from "react"
import CSS from "../css/styles.css"
import Header from "../header.jsx"
import Footer from "../footer.jsx"
import axios from "axios"
import StatsCard from "../StatsCard.jsx"

export default class QuizList extends Component{
  constructor(props){
    super(props)
    this.openQuiz = this.openQuiz.bind(this);
    this.state = {
      quizzes: [],
    }
  }


  openQuiz(e){
    axios.get("https://next-world.herokuapp.com/quizzes/" + e.target.id)
    .then(quiz => {console.log(quiz.data)})
    .catch(err => {console.log(err)})
  }

  componentDidMount(){
    axios.get("https://next-world.herokuapp.com/quizzes/")
    .then(quizzes => {
    //  console.log(quizzes.data)
      this.setState({
        quizzes: quizzes.data
      })//end of this.setSTate
    })//end of .then statement
    .catch(error => {
      console.log(error)
    })//end of catch block
  }//componentDidMount

  quizNames(){
    return this.state.quizzes.map(quiz=>{
      return(
        <div className = "text-center">
          <div className = "quiz-info-list  mb-2 mt-2">
          <div className = "text-center">
          <h3 className = "pb-1 pt-3 quiz-info-text">{quiz.QuizName}</h3>
          <h3 className = "pb-1 quiz-info-text">Difficulty: {quiz.Difficulty}</h3>
          <h3 className = "pb-1 quiz-info-text">Prize: {quiz.Prize}</h3>
          <a className = "btn btn-primary mb-3" href = {"/quiz-info/" + quiz._id}>Start</a>
          </div>
          </div>
        </div>
      )
    })
  }

render(){
  return(
    <div>
    <Header/>
    <h1 className = "text-center quiz-info-text">Quizzes</h1>
    {this.quizNames()}
    <Footer/>
    </div>
  )//end of return
}//end of return

}
