import React, { useState } from "react";
import app from "../../firebaseConfig";
import { getDatabase, ref, get, push } from "firebase/database";

const SignIn = () => {


  //Function to get credientials from the database (email and password) wapani nahuman
  const fetchData = async() => {
    const db = getDatabase(app);
    const dataRef = ref(db, "users/");
    const dataSnap = await get(dataRef);
    if (dataSnap.exists()) {
      console.log(dataSnap.val());
    } else {
      console.log("No data available");
    }
  }



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