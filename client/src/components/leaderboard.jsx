import React from "react"
import CSS from "./css/styles.css"

import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Carousel from "./carousel.jsx"

const user = localStorage.getItem("User")//gets user info from lcoal storage if it exists
console.log(user)
function Leaderboard(){
  return (
    <div>
    <Header/>
    <Carousel/>
    <Footer/>
    </div>
  )
}
export default Leaderboard;
