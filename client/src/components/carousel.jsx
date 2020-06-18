import React, {Component} from "react"
import StatsCard from "./StatsCard.jsx"

import axios from "axios"
import Header from "./header"
import Footer from "./footer"



// This class gets used to display users on the leaderboards.
export default class ViewUsers extends Component{
// --------------------constructor-------------------------
constructor(props){//initializes viewusers class
  super(props)
  this.state = {users: [] }//initializes the users array which will eventually contain user data which will be acquired from mongoDB via get request
}
  // ------------------end of constructor---------------------------




// -------------------------componentDid Mount--------------------------------
componentDidMount(){//executes when page is initially loaded
  axios.get("http://localhost:5000/users/")//makes a get request which returns json objects which get stored in an array
    .then(response => {//stores the responss.data inside the users array
      this.setState({ users: response.data})
    })
    .catch(error =>{
      console.log(error)
    })
}
  // -------------------------end of componentdidmount--------------------------------



// ------------------User List function---------------------------
  userList (){//function which maps through the users array whicih contains json objects and passes a json object whose properties are used  as props to render a a carousel item which contains a StatCard which is an imported component
    return this.state.users.map(currentUser => {
        return (
            <div className="carousel-item">
             <StatsCard user ={currentUser} key={currentUser._id}/>
            </div>
        )
    })
  }



  // ------------------ End User List function---------------------------



// ------------------Html Render------------------------------
render(){
  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

    <div className="carousel-inner">
      <div className="carousel-item active">

      <h1 className = "text-center mt-4  card-image">Leaderboard</h1>

      </div>

      {this.userList()}

    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}
// ------------------End of Html Render------------------------------

}
