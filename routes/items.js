const router = require ("express").Router()//creates a variable which requires the router functionality of express which allowws for get and post requests
let Item = require ("../models/items.model");//sets User variable equal to the export of the users.model file inside the models folder (the export is a mongoose model)

router.route("/").get((req,res) => {//this is a get route viewing users which will be hit up iunder the viewusers.jsx file (which is located in the components folder) which will execute the following lines of code written belopw which is sent and then used in the "app.use" portion of the servr.js file
  Item.find()
  .then(item => res.json(item))//finds all entries in the users database and sends this data using the res.json and res.json is equivalent to res.send (users can be called anything inside the .then)
  .catch(err => res.status(400).json("Error " + err))//catches any errors and sends the error if there are any.
});

router.route("/add").post((req,res)=>{//this is a post route for adding users which will will be hit up under the signup.jsx page execute the following lines of code written belopw which is sent and then used in the "app.use" portion of the servr.js file
  const name = req.body.name//these are all parameters which will be used to create a new user below
  const price = req.body.price
  const rarity = req.body.rarity
  const image = ""



const newItem = new Item ({//creates a new user from the user model which was imported in the beginning of the code
  Name: name,
  Price: price,
  Rarity: rarity,
  Image: image
})
 newItem.save()//saves the users and then executes either the .then or .catch functions below depending on the result of the save
 .then(() => res.json("Exercise added!"))//if the user is successfully saved then res.json sends the specified content
 .catch(err=> res.status(400).json("Error: ", + err))//if the data is not successfully saved then it sends the type of errror that ocurred
})




router.route("/:id").get((req,res)=>{// this will render when the /users/"someID" is hit up. this is a get route which uses paramz to render the object with the speciifed if a requewt is made to that route
  Item.findById(req.params.id)//finds a particular user
  .then(item => res.json(item))//sends the user info via server
  .catch(err=> res.status(400).json("Error: " + err))//sends an error  message if there was one
})

router.route("/:id").delete((req,res)=>{//this will execute if a dxelete request is made to the users/"someID route". for explaination on this route see the get route above
  Item.findByIdAndDelete(req.params.id)//finds user and deletes them by id
  .then(item => res.json("User Successfully Deleted"))
  .catch(err=> res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req,res)=>{// this will execute if /users/update/"someID" is hit up. for explaination on this route see the get route above
  Item.findById(req.params.id)//updates the user
  .then(item => {
    item.Name = req.body.name
    item.Price = req.body.price
    item.Rarity = req.body.rarity

    item.save()//if the user was sucessfull in updating the database than "User succesfully update" is sent other wise an error message ise sent
    .then(()=>res.json("User Successfully Updated"))
    .catch(err=> res.status(400).json("Error" + err))
  })
  .catch(err=> res.status(400).json("Error: " + err))//catches an eror if there was an issue finding the id in the database
})


module.exports = router;//exporst the router functionality which will be used in an app.use funciton in the server.js file to render and use. The server.js can then use the .get and .post functionality of the router which was defined in this file
