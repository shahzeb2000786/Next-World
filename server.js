const express = require ("express")//requires express
const cors = require ("cors")//requires cors
const mongoose = require("mongoose")//requires mongoose
const app = express()//creates an instance of express
const path = require ("path")
const port = process.env.PORT || 5000;//creates a port for the server to listen to
app.use(cors())//tells the instance of express to use cors
app.use(express.json())//allows express to parse json and is able to recognize an incoming request object as a json object





require ("dotenv").config();//configures dotenv so we can use read/write from .env files
const uri = process.env.ATLAS_URI;//creaets a uri which is gotten from going to the mongodb dashboard for the cluster you created and this text is located in the .env file within the backend directory
mongoose.connect(uri,{usenewUrlParser: true, useCreateIndex: true})//connects to mongo cluster by passing in the uri which was set above and also sets two flags which allow mongo connection to work

const connection = mongoose.connection;//creates the constant called connection and sets it equal to the mongoose.connection which has been set up
connection.once("open", ()=> {//oncethe connection variable "open" is "then it executes the arrow function
  console.log("MongoDB database connection established successfully")
})



const usersRouter = require ("./routes/users")//requires users.js from routes folder
const itemsRouter = require ("./routes/items")//requires items.js from routes folder
const questionsRouter = require ("./routes/questions")

app.use ("/users", usersRouter)//loads the contents of usersRouter when /users is targeted which enables get and post (and other api) requests for the "/users" route
app.use("/items", itemsRouter)//loads the contents of itemsRouter when /admins is targeted which enables get and post (and other api) requests for the "/admins" route
app.use("/questions", questionsRouter )// loads contents of itemsRouter when /questions is targeted which enables get and post (and other api) requests for the "/questions" route.


if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build'));
  console.log("prodjction bjild")
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}
app.listen(port,()=>{//servers listens to the specified port
  console.log("Server is running on port : ${port}");
})
