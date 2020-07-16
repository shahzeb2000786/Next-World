/*jshint esversion: 6 */
import React, {Component} from "react";
import axios from "axios";//imports axios to make get and post requests
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import CSS from "./css/styles.css";
import ItemCard from "./itemcard.jsx";//imports itemcard component which renders an organized version of e items from the mongo database

export default class Store extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {//this creates an items array which will contain all the items contained within the items collection which will be requested via get request later on on the file.
      items: []//will contain all the items which will be displayed on the Store

    };
  }


  componentDidMount(){//runs when the page firsgl oads
    axios.get("https://next-world.herokuapp.com/items/")//makes get request to items/ route
    .then(response => {
      this.setState({
        items: response.data//sets the items array of the class equal to the get request data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onSubmit(e){//// TODO:add an alert box or redirect if a person is not signed in and make sure they can't buy items that are higher than their current amount of coins

    e.preventDefault();
    let purchasedItemName = (e.target.id); //sets purchaseditemname equal to the name of the item that was clicked (in this case it targets the form id of the form that was submitted which has been set to the item's name)
    let getPurchasedItemUrl = "https://next-world.herokuapp.com/items/" + purchasedItemName;   //sets a url which will be used to get the clicked item's info via a get request.

    let currentUser = JSON.parse(localStorage.getItem("User"));
    let currentUserEmail = currentUser.Email; //creates a variable which stores the current user's email, which will be used to make a post request in this submit method as well as be used to get the current user's data via get request



    axios.get(getPurchasedItemUrl)//get request to find the information of the item that has been clicked on by using the url defined above
      .then(response=>{//if the get request is successful the data/info on the item will be receieved in the callback.
      let item = response.data; //sets the item variable equal to response.data (which contains the purchased item's data)
      axios.get("https://next-world.herokuapp.com/users/" + currentUserEmail)
        .then(user =>{
          let updatedCoinAmount = (parseInt(user.data.Coins) - parseInt(response.data.Price)).toString();//creates updatedcoinamount variable which is equal to the current user's balance minus the purchased item's value.
           let currentUserItems = user.data.Items;//sets currentUserItem's equal to the user's current items array
           currentUserItems.push(item);//appends the clicked/purchased item into the the user's items  array

           const updatedUserInfo = {//creates an object which will be sent via post request, to update the user's info
             coins: updatedCoinAmount,
             items: currentUserItems
           };
           axios.post("https://next-world.herokuapp.com/users/update/" + currentUserEmail, updatedUserInfo)//post request to update the user's info after they click purchase for an item
           .then(res => console.log(res.data))
           .catch(err => console.log(err));//catches errors for post requests made to /users/update
        })
        .catch(err =>console.log(err));//catches errors in the get request made to /users/
      })

      .catch(error => {//catches any errors in the get request which gets whihc is made to the itesms database
        console.log("failure");
        console.log(error);
      });

  }


  itemList(){
    return this.state.items.map(currentItem => {

      return (
        <div >
        <form   id = {currentItem.Name} onSubmit = {this.onSubmit} action= "items/add" method="post">

        <div className = "text-center">
        <ItemCard item = {currentItem} key = {currentItem._id}/>
        <button type="submit" className ="btn btn-primary text-center">purchase</button>

</div>

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
