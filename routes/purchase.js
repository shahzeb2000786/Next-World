const router = require ("express").Router()//creates a variable which requires the router functionality of express which allowws for get and post requests

router.route("/purchase/:name").get((req,res)=>{
  axios.get("http://localhost:5000/items/")//makes get request to items/ route
  .then(response => {
    console.log(response)

  })
  .catch((error) => {
    console.log(error)
  })
})
