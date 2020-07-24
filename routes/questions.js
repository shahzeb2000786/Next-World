const router = require ("express").Router()//creates a variable which requires the router functionality of express which allowws for get and post requests

let Question = require ("../models/questions.model")



router.route("/").get((req,res)=> {
  Question.find()
  .then(question => res.json(question))//finds all entries in the users database and sends this data using the res.json and res.json is equivalent to res.send (users can be called anything inside the .then)
  .catch(err => res.status(400).json("Error " + err))//catches any errors and sends the error if there are any.
})



router.route("/add").post((req,res)=>{
const question = req.body.question
const option1 = req.body.option1
const option2 = req.body.option2
const option3 = req.body.option3
const option4 = req.body.option4
const correctOption = req.body.correctOption

const newQuestion = new Question ({
  Question: question,
  Option1: option1,
  Option2: option2,
  Option3: option3,
  Option4: option4,
  CorrectOption: correctOption
})

})

module.exports = router;//exporst the router functionality which will be used in an app.use funciton in the server.js file to render and use. The server.js can then use the .get and .post functionality of the router which was defined in this file
