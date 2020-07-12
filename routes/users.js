const router = require ("express").Router()//creates a variable which requires the router functionality of express which allowws for get and post requests
let User = require ("../models/users.model");//sets User variable equal to the export of the users.model file inside the models folder (the export is a mongoose model)

router.route("/").get((req,res) => {//this is a get route viewing users which will be hit up iunder the viewusers.jsx file (which is located in the components folder) which will execute the following lines of code written belopw which is sent and then used in the "app.use" portion of the servr.js file
  User.find()
  .then(user => res.json(user))//finds all entries in the users database and sends this data using the res.json and res.json is equivalent to res.send (users can be called anything inside the .then)
  .catch(err => res.status(400).json("Error " + err))//catches any errors and sends the error if there are any.
});

router.route("/:email").get((req,res)=>{// this will render when the /users/"someemail" is hit up. this is a get route which uses params to render the object with  speciifed if a request is made to that route
  User.findOne({Email: req.params.email})//finds the user byu their email (emaoil was passed in as a parameter in the route)
    .then(user=>res.json(user))//sends user data if there is no error
    .catch(err=>res.status(400).json("Error" +err))//sends error if there was an error
})

router.route("/add").post((req,res)=>{//this is a post route for adding users which will will be hit up under the signup.jsx page execute the following lines of code written belopw which is sent and then used in the "app.use" portion of the servr.js file
  const username = req.body.username//these are all parameters which will be used to create a new user below
  const name = req.body.name
  const belt = req.body.belt
  const age = req.body.age
  const email = req.body.email
  const commitment = req.body.commitment
  const monthlyparticipation = req.body.monthlyparticipation
  const badgecount = req.body.badgecount
  const avatar = req.body.avatar
  const coins = req.body.coins
  const items = req.body.items

const newUser = new User ({//creates a new user from the user model which was imported in the beginning of the code
  Username: username,
  Name: name,
  Belt: belt,
  Age: age,
  Email: email,
  Commitment: commitment,
  MonthlyParticipation: monthlyparticipation,
  BadgeCount: badgecount,
  Avatar: avatar,
  Coins: coins,
  Items: items
})

newUser.save()//saves the users and then executes either the .then or .catch functions below depending on the result of the save
.then(() => res.json("User Added"))//if the user is successfully saved then res.json sends the specified content
.catch(err=> res.status(400).json("Error: ", + err))//if the data is not successfully saved then it sends the type of errror that ocurred

})




router.route("/:id").get((req,res)=>{// this will render when the /users/"someID" is hit up. this is a get route which uses paramz to render the object with the speciifed if a requewt is made to that route
  User.findById(req.params.id)//finds a particular user
  .then(user => res.json(user))//sends the user info via server
  .catch(err=> res.status(400).json("Error: " + err))//sends an error  message if there was one
})

router.route("/:id").delete((req,res)=>{//this will execute if a dxelete request is made to the users/"someID route". for explaination on this route see the get route above
  User.findByIdAndDelete(req.params.id)//finds user and deletes them by id
  .then(user => res.json("User Successfully Deleted"))
  .catch(err=> res.status(400).json("Error: " + err))
})

router.route("/update/:email").post((req,res)=>{// this will execute if /users/update/"someEmail" is hit up. for explaination on this route see the get route above
  User.findOne({req.params.email})//updates the user by first finding the unique user by using their email field
  .then(user => {

    user.Username = req.body.username
    user.Name= req.body.name,
    user.Belt= req.body.belt,
    user.Age= req.body.age,
    user.Email: req.body.email,
    user.Commitment= req.body.commitment,
    user.MonthlyParticipation= req.body.monthlyparticipation,
    user.BadgeCount= req.body.badgecount,
    user.Avatar = req.body.Avatar
    user.Coins = req.body.coins
    user.Items = user.Items.append(req.body.item)


    user.save()//if the user was sucessfull in updating the database than "User succesfully update" is sent other wise an error message ise sent
    .then(()=>res.json("User Successfully Updated"))
    .catch(err=> res.status(400).json("Error" + err))
  })
  .catch(err=> res.status(400).json("Error: " + err))//catches an eror if there was an issue finding the id in the database
})


module.exports = router;//exporst the router functionality which will be used in an app.use funciton in the server.js file to render and use. The server.js can then use the .get and .post functionality of the router which was defined in this file
