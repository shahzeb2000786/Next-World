const mongoose = require ("mongoose")

const quizSchema = new mongoose.Schema({
  Questions: [Object],//contains questions
  Difficulty: String,//difficulty will be defined from 0-10 as a string with 0 being easiest
  Price: String, //amount of coins a user gets if they succesfuly complete the quiz
  
})

const Quiz = mongoose.model("Quiz", quizSchema)

module.exports = Quiz;
