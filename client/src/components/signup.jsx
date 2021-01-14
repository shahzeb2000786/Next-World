import React, {Component, useState,useContext} from "react";
import axios from "axios";//allows for users to make http requests to routes folder in the backend of the project
import CSS from "./css/styles.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import GoogleLogin from "react-google-login"//imports oauth google login functionality
import { GoogleLogout } from 'react-google-login';
import currentUser from "./footer.jsx"
import {UserContext} from "../UserContext"




function SignUp (){





    //---------------------google oauth response-------------------------------------------------------------
      function responseGoogle(response){// this is a function which handles the onsuccess and onfailure methods of the google sign in implmentation made within this file
         const Http =  new XMLHttpRequest();//binds xmlhttprequest to a const variable called Http to make get requests
          var googleAuthenticationURL = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + response.tokenId   //sets the the url for a google api which will be used to  authentidcate the user's token
          Http.open("GET", googleAuthenticationURL)//specifies what kind of request we wajt to make and the route that the request will go to
          Http.send();//sends the request to the specified url located in the googleAuthenticaitonURL
          Http.onreadystatechange = (e) => {///tghis function handles any changes that occur on the http const, and will log the result from the http request made above.

            let authenticatedResponse
            authenticatedResponse = JSON.parse(Http.response)//converts the http.response to json so the different google response properties can be accessed.

            if (authenticatedResponse.error_description){//if there is an error in authenticating the token or the token is invalid this returns the string "err", which will be handled be used to redirect the user to the homepage or maybe add an error popup message
              return ("err")
            }

            else{//if there is no error in verifying the google token then it will return the authenticatedresponse variable whose properties will be saved into the users database (only the username,name, and email will be saved and the rest of the user information will have an edit page where users can edit their info after they sign up)
              const Username = authenticatedResponse.email
              const Email = authenticatedResponse.email
              const Name = authenticatedResponse.name

              LoginUser(authenticatedResponse.email)//this calls the loginUser function in the class, (this function sets the currentUser equal to the authenticatedusers info (which is fetched using from the mongo database using an http get request)
              var date = new Date();
              var currentMonth = date.getMonth();
              var currentDayOfMonth = date.getDate();
              const user = {//creates a mongo item using the schema defined under users.model.js and for initial sign up only the username,name, and email will be saved and the user/admin will enter all the otheri nformation in later
                 username: Username,
                 name: Name,
                 belt: "None",
                 age:  "",
                 email: Email,
                 commitment: "",
                 monthlyparticipation: [currentDayOfMonth],
                 yearlyparticipation: [],
                 badgecount: "",
                 avatar: "",
                 coins: "20000",
                 items: [{Name: "Bostaff", Price: "0", Rarity: "Common"} ]
               }
                 axios.post("https://next-world.herokuapp.com/users/add", user)//post request made to the /users/add route which saves users objects and the route handling for this post request is located witin the users.js file)
                 .then(res => console.log(res.data))
            //  console.log(authenticatedResponse)
            }//end of the else statement
        }//end of onreadystatechange

      }//end of response google




      function UseLocalState(localItem){
        const[loc, setState] = useState (localStorage.getItem(localItem))
        function setLoc(newItem){
          localStorage.setItem(localItem,newItem)
          setState(newItem)
        }
        return [loc,setLoc]
      }



      function LoginUser(email){//method which sets the current user property of the class to the user who just succesfully signed in using google, this method will be used in the google onsuccess response method
        axios.get("https://next-world.herokuapp.com/users/"+ email)//makes a get request to the specified route which will return the user info from the database and stores it in the currentUser property of the class
          .then(user=> {  //if user is found then it executes the liens of code below
          console.log(user.data)
          setUser(JSON.stringify(user.data))
        })
          .catch((error)=>{
            console.log(error)
          })
      }
      function logOutUser(){//this logs out a user by setting the currentUser of the sign up class to an empty object so the user info can no longer be accessed
        localStorage.clear()//clears all the user data from local storage when they sign out
        window.location.reload();//this reloads the page when the user logs out and after the user has been set to "Currently Signed Out", so that the "currently signed out" text displays immediately when the user signs out
      }
      const[user,setUser] = UseLocalState("User")//sets the user hook variable and creates the setUser function (which allows for modficiaton of the user variable) by calling the useLocalState function (which accesses the localstorage of the user's browser) by passing in "User" in as a prameter ("User" is the key under which the user's info is stored in local storage)

{/*}--------------------displayCUrrentUser function used to display signed in user------------------------------------------------------------------------*/}
    function displayCurrentUser(stringifiedUser){//this function will get passed into the render page for sign up
      if(user == null){// if there is not user(user is retrieved from local localStorage), then the if statement is returned
        return(//if there is no current user (user is retrieved from local storage) then it will render a simple "welcome guest user" header
        <div>
        <h1>Currently Signed Out</h1>
        </div>
      )}//end of if statement
      else{//this else statement executes if there is a current user stored in the local storage (which only happens after the user signs in or the user's sign in info is already saved)
        try{
          return(//if there is a current user (user is retrieved from local storage) then it will render a header with "Welcome" along with the signed in user's name (the user first gets converted to json and then its name proeprty is accessed)
          <div>
          <h1>Welcome {JSON.parse(user).Name}</h1>
          </div>
        )}//end of try block
        catch(err){
          console.log(err)
          return(<div>Error signing in</div>)

        }//end of catch
        }//end of else statement
    }//end of function
    {/*}---------------------------------end of function-----------------------------------------------------------*/}



    return(
    <div>
    <Header/>
    <div className="text-center">

    {displayCurrentUser(user)}   {/*calls the displayCurrentUser function defined above to render an h1 which changes based on if the user is signed in or not*/}
    <GoogleLogin//thisis a google signin/oauth button
     clientId="861886921420-t33isa28bs9a5rktm3qf594bvnml89oc.apps.googleusercontent.com"
     buttonText="Login"
     onSuccess={responseGoogle}//calls the responseGoogle function (which is defined outside the default export class) when a user successfully signs in
     onFailure={responseGoogle}//calls the responseGoogle function (which is defined outside the default export class) when a user fails to sign in
     cookiePolicy={'single_host_origin'}
    />
    <GoogleLogout
      clientId="861886921420-t33isa28bs9a5rktm3qf594bvnml89oc.apps.googleusercontent.com"//this is the google oauth client id for this project whic his locaterd on the gooogle console developers page
      buttonText="Logout"
      onLogoutSuccess={logOutUser}
    >
    </GoogleLogout>

    </div>
    <Footer/>
    </div>
  )
}
export default SignUp
