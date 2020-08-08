/*jshint esversion: 6 */
import React from "react";
import CSS from "./css/styles.css";

function StatsCard(props){
  return(
    <div className="card-width text-center card-color mt-5" >
      <img  src="/images/avatars/boy1" className=" card-image mt-2" alt="image-of-a-person"></img>
      <div className="pb-3" >
      <a>
      <img className = "badge-icon-size " src="https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png"></img>
      </a>
      <h3 > Stats</h3>
      <p className="card-text">Name: {props.user.Name}</p>
      <p className="card-text">Belt: {props.user.Belt}</p>
      <p className="card-text">Age: {props.user.Age}</p>
      <p className="card-text">Coins: {props.user.Coins}</p>
      </div>
    </div>
  )
}
export default StatsCard
