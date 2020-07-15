import React, {Component} from "react";
import axios from "axios";
import CSS from "./css/styles.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default class AddItem extends Component{
  constructor(props){//for explaination on this constructor look at the signup.jsx page
    super(props)
    this.onChangeItemName = this.onChangeItemName.bind(this)//for explainaton o nbind methods look at signup.jsx
    this.onChangePrice = this.onChangePrice.bind(this)
    this.onChangeRarity = this.onChangeRarity.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      name: "",
      price: "",
      rarity:"",
  }
  }

  onChangeItemName(e){//onchagne methods are used in the inputs in the form which will be on this page and these inputs "values" are set equal to these function so whenever the user changes the value of the input, this function will log that change and change the variable within the class
    this.setState({
      name: e.target.value
    })
  }


  onChangePrice(e){
    this.setState({
      price: e.target.value
    })
  }


  onChangeRarity(e){
    this.setState({
      rarity: e.target.value
    })
  }

onSubmit(e){
  e.preventDefault();
  console.log(e.target)
  const item = {
    name: this.state.name,
    price: this.state.price,
    rarity: this.state.rarity
  }
  console.log(item)
  axios.post("https://next-world.herokuapp.com/items/add", item)//posts to the items/add route which handles post requests to add new items into the total items inventory (the route handler for this post method is located within the items.js file)
  .then(res => console.log(res.data))

  this.setState({//resets all the variable states of the class whenevera form is submitted so a new user could be entered again
    name: "", price: "", rarity: ""//resets all the variable states of the class whenever a form is submitted so a new user could be entered again
  })
}


componentDidMount(){
  axios.get("https://next-world.herokuapp.com/items/")
  .then(response => {})
}
render(){
  return(
    <div>
    <Header/>
    <div className="center">
    <form className="" onSubmit = {this.onSubmit} >
    <div className="d-flex flex-column">
    <input type = "text" name = "name" value = {this.state.name} onChange = {this.onChangeItemName} placeholder = "Enter Item Name"></input>
    <input type = "text" name = "price" value = {this.state.price}  onChange = {this.onChangePrice} placeholder = "Enter Price of Item"></input>
    <input type = "text" name = "rarity" value = {this.state.rarity}  onChange = {this.onChangeRarity} placeholder = "Enter Rarity of Item"></input>
    <input className = "pb-3" type="submit" value="Submit" className = "btn btn-primary"></input>
    </div>
    </form>


    </div>
    <Footer/>
    </div>
  )
}

}
