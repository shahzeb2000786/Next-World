import React, {Component} from "react";
import axios from "axios";//imports axios to make get and post requests
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import CSS from "./css/styles.css";





function ItemCard(props){//creates item card function which takeas an items object as a prop and renders item card which dispaly the information about the item such as price and rarity in an organized format
  let formAction = "/items/add"//this variable will be used as the form action for each of the item cards, so when the "purchase" button, the item will get added to the user's inventory
  return(
    <div className="card-width text-center card-color mt-5">

    <h1>{props.item.Name}</h1>
    <p1>{props.item.Price}</p1>
    <p1>{props.item.Rarity}</p1>

    <form  action = {formAction} method="post" >
    <input className = "card-color" value = {props.item.Name} name= "name"/>
    <input className = "card-color" value = {props.item.Price} name= "price"/>
    <input  className = "card-color" value = {props.item.Rarity} name= "rarity"/>
    </form>
    </div>
  )
}


export default ItemCard;
