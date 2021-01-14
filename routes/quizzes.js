const router = require ("express").Router()
const Quiz = require ("../models/quizzes.model")


router.route("/").get((req,res)=>{// get route for finding all the quizzes objects inside the quiz collection in the database
  Quiz.find()
  .then(item => res.json(item))
  .catch(err => res.status(400).json("Error " + err))//catches any errors and sends the error if there are any.
})

router.route("/:id").get((req,res) => {
  Quiz.findOne({_id: req.params.id})
  .then(item => res.json(item))
  .catch(err => res.status(400).json("Error" + err))
})//get route for finding a pecific quiz object in a collection given its id
module.exports = router;//exporst the router functionality which will be used in an app.use funciton in the server.js file to render and use. The server.js can then use the .get and .post functionality of the router which was defined in this file
