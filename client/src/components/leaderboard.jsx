import React, {Component, useContext} from "react";
import CSS from "./css/styles.css"
import axios from "axios"
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Carousel from "./carousel.jsx"
import MaterialTable from "material-table";

export default class Leaderboard extends Component{
  constructor (props){
    super(props)
    this.onLeaderboardCellHover = this.onLeaderboardCellHover.bind(this)
    this.state = {users: []}//this.state
  }//constructor

onLeaderboardCellHover(e){
  console.log(e)
}


  componentDidMount(){
    console.log(MaterialTable)

    axios.get("https://next-world.herokuapp.com/users/leaderboard")
    .then(response => {
      console.log(response.data)
      this.setState({users: response.data})
    })//then
    .catch(error => {
      console.log(error)
    })//catch
  }

returnLeaderboard(users){//users will be an array of user objects retrieved from mongo
  let count = 0
  return users.map(user => {
    count += 1
    let leaderboardCellColorClass = "None"
    if (count == 1){leaderboardCellColorClass = "gold-div"}
    else if(count == 2){leaderboardCellColorClass = "silver-div"}
    else if(count == 3){leaderboardCellColorClass = "bronze-div"}
    else{leaderboardCellColorClass = "none"}
    return (
        <div onMouseEnter = {() => this.onLeaderboardCellHover()} className = "border bronze-div border-black w-100 d-flex justify-content-between pb-3 pt-3 pl-3 pr-3 ">
        <h3 className = "">{count}. </h3>
        <h3 className = "">{user.Email}</h3>
        <h3 className = ""> {user.Coins} 💎</h3>
        </div>

    )// return
  })//end of map and outer return
}

  render(){
    return(
      <div>

      <Header/>

      <h1 className = "text-center mt-2 mb-2">Leaderboards</h1>
      <div className = "d-flex justify-content-around mt-3 mb-3">
      <a className = "text-grey" href = "">Coins</a>
      <a className = "text-grey" href = "">Participation</a>
      <a className = "text-grey" href = "">Badges</a>

      </div>
      {this.returnLeaderboard(this.state.users)}
      <Footer/>
      </div>
    )//return
  }//render
}//end of class
