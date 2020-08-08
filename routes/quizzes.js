const router = require ("express").Router()
const Quiz = require ("../models/quizzes.model")


router.route("/").get((req,res)=>{
  Quiz.findOne()
  .then(item => res.json(item))
  .catch(err => res.status(400).json("Error " + err))//catches any errors and sends the error if there are any.
})
module.exports = router;//exporst the router functionality which will be used in an app.use funciton in the server.js file to render and use. The server.js can then use the .get and .post functionality of the router which was defined in this file
