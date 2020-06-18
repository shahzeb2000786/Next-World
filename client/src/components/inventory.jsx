import React, {Component} from "react";
import axios from "axios";//imports axios to make get and post requests
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import CSS from "./css/styles.css";
import ItemCard from "./itemcard.jsx"//imports itemcard component which renders an organized version of e items from the mongo database

export default class Inventory extends Component{
  constructor(props){
    super(props)
    this.state = {//this creates an items array which will contain all the items contained within the items collection which will be requested via get request later on on the file.
      items: []
    }
  }

componentDidMount(){//runs when the page firsgl oads
  axios.get("http://localhost:5000/items/")//makes get request to items/ route
  .then(response => {
    console.log(response)
    this.setState({
      items: response.data//sets the items array of the class equal to the get request data
    })
  })
  .catch((error) => {
    console.log(error)
  })
}


  itemList(){
    return this.state.items.map(currentItem => {
      return <ItemCard item = {currentItem} key = {currentItem._id}/>

        // <div className = "text-center mt-4 mb-4">
        // <h1>{currentItem.Name}</h1>
        // <h3>{currentItem.Price}</h3>
        // <h3>{currentItem.Rarity}</h3>
        // </div>

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
