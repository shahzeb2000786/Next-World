import React, {Component} from "react";
import CSS from "./css/styles.css"
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import axios from "axios"
import StatsCard from "./StatsCard.jsx"

// ---------------------returns a stats card based on users in the dataabse----------------------------


// ---------------------end of function----------------------------



export default class ViewUsers extends Component{

// --------------------constructor-------------------------
  constructor(props){
    super(props)

    this.state = {users: []}//[{Name: "Meraj", Belt: "Black", Commitment: "Advanced"},{Name: "Shahzeb", Belt: "Black", Commitment: "Advanced"},{Name: "Meraj", Belt: "Black", Commitment: "Advanced"}]
  }
  // ------------------end of constructor---------------------------




// -------------------------componentDid Mount--------------------------------
  componentDidMount(){// portion of code runs as soon as this jsx page is rendered

    axios.get("https://next-world.herokuapp.com/users/")//makes http request for users.jsx which returns all the items in the users database
      .then(response=> {//promise .then which is hit up if there is not error in retrieving items
      //  console.log(response.data)
      this.setState({//this sets the state of the users var in array whose members are json objects
        users: response.data
      })
    })
      .catch((error)=>{//catches any errors from retrieving items in the database
        console.log(error)
      })
  }
  // -------------------------end of componentdidmount--------------------------------



userList (){//function which maps through the users array whicih contains json objects and passes a json object whose properties are used  as props to render a StatCard which is an imported component
  return this.state.users.map(currentUser=>{
    console.log(currentUser)
    return <StatsCard user ={currentUser} key={currentUser._id}/>//pass
  })
}


  render(){
    return(
      <div>
      <Header/>
    {this.userList()}{/*executes the usreList function of the class which maps through all the users and renders them in StatCard form*/}
      <Footer/>
      </div>
    )
  }

}
