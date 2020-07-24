const mongoose = require ("mongoose")

const questionSchema = new mongoose.Schema({
  Question: String,
  Option1: String,
  Option2: String,
  Option3: String,
  Option4: String,
  CorrectOption: String,
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question;
