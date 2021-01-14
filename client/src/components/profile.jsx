import React, {Component, useContext} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import SignUp from "./signup.jsx";//this import will allow access to the current user info if they have signed up
import CSS from "./css/styles.css";
import axios from "axios";//imports axios to make get and post requests
import StatsCard from "./StatsCard"
import ItemCard from "./itemcard.jsx"

export default class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser:  JSON.stringify({_id: 1, Name: "Guest User", Belt: "White", Age: "8", Coins: "1000"})
    }
  }


//----------------------------------componentdidmount-----------------------------
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem("User"))//gets user info  from local storage and converts it into json
    if (user != null){
      axios.get("https://next-world.herokuapp.com/users/"+ (user).Email)//get requestd item info
      .then(user => {
        console.log(JSON.stringify(user.data))
        this.setState({
          currentUser: JSON.stringify(user.data)
        })//end of set state
        console.log(this.state.currentUser);
      })//end of .then
      .catch(error => {
        console.log(error);
      });//end of catch block
    }//end of if statement
  }//end of componentdidmount

inventoryList(){
let currentUserObject = JSON.parse(this.state.currentUser).Items;
console.log(typeof(currentUserObject));

 let itemsArray = [];
 for (var items in currentUserObject){
   itemsArray.push(currentUserObject[items]);
 }
return itemsArray.map(currentItem => {
    return <ItemCard item = {currentItem} key = {currentItem._id} />
})

}


//----------------------------------componentdidmount-----------------------------
render (){
  return(
    <div>
    <Header/>
    <StatsCard user = {JSON.parse(this.state.currentUser)} key = {JSON.parse(this.state.currentUser)._id}/>{/* converts the user variable to json form so it can be passed into the StatsCard component as a prop and have its properties used within the StatsCard*/}

    <div className = "text-center">
      <h1 className = "mt-5"> Inventory</h1>
      {this.inventoryList()}
    </div>

    <Footer/>
    </div>
  )
}
}
