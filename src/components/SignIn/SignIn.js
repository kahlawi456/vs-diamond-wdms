import React from "react";

const SignIn = () => {
  return (
    <div>

        {/*input for user's email address upon signin*/}
        <input 
          type="text"
          placeholder="Email"
        />
        {/*input for user's password upon signin*/}
        <input 
          type="password"
          placeholder="Password"
        />
        <button>Signin</button>
    </div>
  )
}

export default SignIn;