import React, {Component} from "react";
import axios from "axios";//imports axios to make get and post requests
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import CSS from "./css/styles.css";
import ItemCard from "./itemcard.jsx"//imports itemcard component which renders an organized version of e items from the mongo database

export default class Store extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {//this creates an items array which will contain all the items contained within the items collection which will be requested via get request later on on the file.
      items: [],//will contain all the items which will be displayed on the Store

    }
  }


  componentDidMount(){//runs when the page firsgl oads
    axios.get("http://localhost:5000/items/")//makes get request to items/ route
    .then(response => {
      this.setState({
        items: response.data//sets the items array of the class equal to the get request data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onSubmit(e){
    e.preventDefault();
    let purchasedItemName = (e.target.id) //sets purchaseditemname equal to the name of the item that was clicked (in this case it targets the form id of the form that was submitted which has been set to the item's name)
    let getPurchasedItemUrl = "http://localhost:5000/items/" + purchasedItemName   //sets a url which will be used to get the clicked item's info via a get request.

    let currentUser = JSON.parse(localStorage.getItem("User"))
    let currentUserEmail = currentUser.Username //creates a variable which stores the current user's email, which will be used to make a post request in this submit method

    axios.get(getPurchasedItemUrl)//get request to find the information of the item that has been clicked on by using the url defined above
      .then(response=>{//if the get request is successful the data/info on the item will be receieved in the callback.
      let updatedCoinAmount = parseInt(currentUser.Coins) - parseInt(response.data.Price) //computes the value of the user's coin amount after they have purchased the item
      updatedCoinAmount = updatedCoinAmount.toString()//converts integer value of coin amount to string
        const updatedUserInfo = {//creates an object which will be sent via post request, to update the user's info
          username: currentUser.Username,
          name: currentUser.Name,
          belt: currentUser.Belt,
          age: currentUser.Age,
          email: currentUser.Email,
          commitment: currentUser.Commitment,
          monthlyParticipation: currentUser.Monthlyparticipation,
          badgeCount: currentUser.Badgecount,
          avatar: currentUser.avatar,
          coins: updatedCoinAmount,
          item: response.data
        }

        axios.post("http://localhost:5000/items/update/" + currentUserEmail)//post request to update the user's info after they click purchase for an item
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

      })


      .catch(error => {//catc hes any errors in the get request
        console.log("failure")
        console.log(error)
      })


  }


  itemList(){
    return this.state.items.map(currentItem => {

      return (
        <div>
        <form id = {currentItem.Name} onSubmit = {this.onSubmit} action= "items/add" method="post">
        <input value = "someval"></input>
        <button type="submit" className ="btn btn-primary">purchase</button>
        <ItemCard item = {currentItem} key = {currentItem._id}/>
        </form>
        </div>
      )

    })
  }

  render(){
    return(
      <div>

      <Header/>
      {this.itemList()}//calls the itemlist function contained within the class and renders it in between the header and footer
      <Footer/>
      </div>
    )
  }

}
