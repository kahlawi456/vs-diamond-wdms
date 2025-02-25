import React, { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

const Index = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      <title>VSDiamond Dental Clinic | Index</title>
      <button>View Our Services</button>
      <button>Dental Portfolio</button>
      <button onClick={() => setShowSignIn(!showSignIn)}>Sign In</button>
      {showSignIn && <SignIn />}
      <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
      {showSignUp && <SignUp />}
    </div>
  );
};

export default Index;