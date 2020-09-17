import React, {Component, useContext} from "react";
import CSS from "../css/styles.css";
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import axios from "axios";
import StatsCard from "../StatsCard.jsx";
import ReactPlayer from "react-player"

export default class EarnCoinsCarousel extends Component{
  constructor(props){
    super(props)
    this.finishedWatchingIntro = this.finishedWatchingIntro.bind(this)
    this.state = {
      currentUser:  JSON.stringify({_id: 1, Name: "Guest User", Belt: "None", Age: "8", Coins: "1000"})
    }//end of this.state

  }//end of construc tor
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem("User"))
    if (user != null){
      axios.get("https://next-world.herokuapp.com/users/"+ (user).Email)//get requestd item info
      .then(user => {
        //console.log(JSON.stringify(user.data))
        this.setState({
          currentUser: JSON.stringify(user.data)
        })//end of set state
      //  console.log(this.state.currentUser);
      })//end of .then
      .catch(error => {
        console.log(error);
      });//end of catch block
    }//end of if statement

  }

  finishedWatchingIntro(){
    let JSONUserData = (JSON.parse(this.state.currentUser))


    let currentUserEmail = JSONUserData.Email
    console.log(currentUserEmail)
    let updatedUserInfo = {
      coins: "20000",
      items: [],
      belt: "White"
    }
    axios.post("https://next-world.herokuapp.com/users/update/" + currentUserEmail, updatedUserInfo)//post request to update the user's info after they click purchase for an item
    .then(res => alert("Item has been purchased"))
    .catch(err => alert(err.toString()));
  }//finishedWatchingIntro

  render(){
//console.log(this.state.currentUser)
let JSONUserData = (JSON.parse(this.state.currentUser))
console.log (JSONUserData.Belt)
    if (JSONUserData.Belt == "None"){//checks if the user is a beginner and displays an intro video if they are
      console.log("user is a noob")
      return (
        <div>
        <Header/>
        <div className = "text-center">
        <ReactPlayer url = "https://www.youtube.com/watch?v=uJ_1HMAGb4k"/>
        <button onClick = {this.finishedWatchingIntro} className = "btn btn-danger">Finished watching?</button>
        </div>

        <Footer/>
        </div>
      )//end of return
    }//end of if
      return(//only executes when the user is not a beginner i.e has a belt of some sort already
        <div className = "text-center">
        <Header/>
          <div className = "text-center ">
          <a href="/quiz-list">
            <h1>  Take Quizzes</h1>
          </a>
          </div>
        <Footer/>
        </div>
      )//end of return


  }//end of render
}//end of QuizzesList class component
