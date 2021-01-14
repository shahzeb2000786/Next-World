const mongoose = require ("mongoose");
const userSchema = new mongoose.Schema ({//creates a app user schema
Username:{
  type: String,//requries the username to be of type string
  required: true,//requires the username to be be typed in when saving an instance of userSchema
  unique: true,//must be unique in the database
  trim: true,//trims any white space off the username when it is entered
  minlength: 3//requires uername to be at least 3 characters
},
  Name: String,
  Belt: String,
  Age: String,
  Email: {type: String, unique: true},
  Commitment: String,
  MonthlyParticipation: Array,
  YearlyParticipation: Object,
  ParticipationRecords: Array,
  TotalParticipation: String,
  BadgeCount: String,
  Avatar: String,
  Coins: String,
  Items: Array
},{
  timestamps: true, //sets a time stamp for when the user enters their information and gets saved t othe databse.
})

const User = mongoose.model("User", userSchema)//creates a model called User which is based on the userSchema schema

module.exports = User; //exports the user model
