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
    alert("Hello")
    axios.get("http://localhost:5000/quizzes/" + e.target.id)
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
        <form id = {quiz._id} onSubmit = {this.openQuiz}>
        <button type= "submit"> {quiz.QuizName}</button>
        </form>
        
        <a href = {"/quiz-list/" + quiz._id}>
        <h1>{quiz.QuizName}</h1>
          </a>
        </div>
      )
    })
  }

render(){
  return(
    <div>
    <Header/>
    {this.quizNames()}

    <button onClick={(this.openQuiz)}>Hello</button>
    <Footer/>
    </div>
  )//end of return
}//end of return

}
