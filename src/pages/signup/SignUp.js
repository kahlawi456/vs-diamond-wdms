import React, { useState } from 'react'
import './SignUp.css'
import { Link } from "react-router-dom"
import { auth } from '../../database/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../database/Firebase';
import { getDatabase, ref, set, push } from 'firebase/database';

const SignUp = () => {

    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    const saveData = async (e) => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "users/details"));
        set(newDocRef, {
            emailAdd: inputValue1,
            password: inputValue2
        }).then( () => {
            alert("data saved successfully")
        }).catch( (error) => {
            alert("error", error.message);
        })

        e.preventDefault()
        try{
        await createUserWithEmailAndPassword(auth, inputValue1, inputValue2)
        console.log("Account Created")
        } catch(err) {
        console.log(err)
        }
    }

  return (

    <div className='signup-container'>
        <form className='signup-form'>
            <h2>Sign Up</h2>
            <label htmlFor="email">
                Email:
                <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)}/>
            </label>
            <label htmlFor="password">
                Password:
            <input type="password" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/>
            </label>
            <button type="submit" onClick={saveData}>Sign Up</button> <br />
            <p>Already Registered? <Link to="/#">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUp