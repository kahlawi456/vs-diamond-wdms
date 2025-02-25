import React, { use } from "react";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { useState } from "react";

const Index = () => {

  //State variables for signin and signup 
  const [showSignUp, SetShowSignUp] = useState(false);
  const [showSignIn, SetShowSignIn] = useState(false);

  //handles the event when the signup button is clicked, making the showSignUp value to it's opposite
  const handleSignUpClick = () => {
    SetShowSignUp(!showSignUp);
  }

   //handles the event when the signin button is clicked, making the showSignIn value to it's opposite
  const handleSignInClick = () => {
    SetShowSignIn(!showSignIn);
  }

  return (

    <div>
      <title>VSDiamond Dental Clinic | Index</title>
    
      

      <button>View Our Services</button> {/*view services button  */}
      <button>Dental Portfolio</button> {/*view dental portfolio button  */}

      {/*signin button to appear the signin form*/}
      <button onClick={handleSignInClick}>Sign In</button>
      {showSignIn && <SignIn />}

      {/*signup button to appear the signup form*/}
      <button onClick={handleSignUpClick}>Sign Up</button>
      {showSignUp && <SignUp />}
  
    </div>
  )
}

export default Index;