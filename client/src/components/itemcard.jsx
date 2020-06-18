import React from "react";
import CSS from "./css/styles.css"

function ItemCard(props){//creates item card function which takeas an items object as a prop and renders item card which dispaly the information about the item such as price and rarity in an organized format
  return(
    <div className="card-width text-center card-color mt-5">

    <h1>{props.item.Name}</h1>
    <p1>{props.item.Price}</p1>
    <p1>{props.item.Rarity}</p1>

    </div>
  )
}

export default ItemCard;
