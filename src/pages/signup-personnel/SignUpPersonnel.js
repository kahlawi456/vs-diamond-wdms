/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : January 26, 2024
File            : SignUpPersonnel.js
Stylesheet      : SignUpPersonnel.css
Description     : 
    This page allows the personnel to sign up and fill up their basic information.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import React, { useState } from 'react'
import './SignUpPersonnel.css'
import { Link } from "react-router-dom"
import { auth } from '../../database/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../database/Firebase';
import { getDatabase, ref, set, push } from 'firebase/database';
import Copyright from "../../components/copyright/Copyright"
import SignUpBG from "../../components/signup-bg/SignUpBG"

const SignUpPersonnel = () => {
    
    //These instantiate the variables
    let [firstName, setfirstName] = useState("");
    let [middleName, setmiddleName] = useState("");
    let [lastName, setlastName] = useState("");
    let [address, setaddress] = useState("");
    let [contact, setcontact] = useState("");
    let [occupation, setoccupation] = useState("");
    let [civilStatus, setcivilStatus] = useState("");
    let [birthdate, setbirthdate] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");

    /*
    Function that allows the project to set each 
    data to the realtime database under users/details
    */
    const saveData = async (e) => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "users/details"));
        if(confirm == password){
            set(newDocRef, {
                email: email,
                password: password,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                address: address,
                contact: contact,
                occupation: occupation,
                civilStatus: civilStatus,
                birthdate: birthdate,
                age: age
            }).then( () => {
                alert("Patient Registered.")
            }).then( () => {
                window.location.href = "../Patient"
            }).catch( (error) => {
                alert("Error", error.message);
            })
        }else{
            alert("Passwords do not match.");
        }
        
        //Providing firebase auth and create user with the email and pass
        e.preventDefault()
        try{
        await createUserWithEmailAndPassword(auth, email, password)
        console.log("Account Created")
        } catch(err) {
        console.log(err)
        }
    }

  return (

    <div className='signup-container'>
        <title>VSDiamond Dental Website - Register</title>

        <SignUpBG/>
        <form className='signup-form'>
            <h2>Sign Up</h2>
            
            <div className="row-container">
                <div className="fields-container">
                    <input type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} required/>
                    <label htmlFor="first-name">First Name</label>
                </div>
                <div className="fields-container">
                    <input type="text" value={middleName} onChange={(e) => setmiddleName(e.target.value)} required/>
                    <label htmlFor="middle-name">Middle Name</label>
                </div>
                <div className="fields-container">
                    <input type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} required/>
                    <label htmlFor="last-name">Last Name</label>
                </div>
            </div>
            <div className="row-container">
                <div className="fields-container">
                    <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} required/>
                    <label htmlFor="address">Address</label>
                </div>
                <div className="fields-container">
                    <input type="text" value={contact} onChange={(e) => setcontact(e.target.value)} required/>
                    <label htmlFor="contact">Contact Number</label>
                </div>
                <div className="fields-container">
                    <input type="text" value={civilStatus} onChange={(e) => setcivilStatus(e.target.value)} required/>
                    <label htmlFor="civil-status">Civil Status</label>
                </div>
            </div>
            <div className="row-container">
                <div className="fields-container">
                    <input type="text" value={birthdate} onChange={(e) => setbirthdate(e.target.value)} required/>
                    <label htmlFor="birthdate">Birthdate</label>
                </div>
                <div className="fields-container">
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
                    <label htmlFor="age">Age</label>
                </div>
            </div>

            <h3>Login Credentials</h3>

            <div className="row-container">
                <div className="fields-container">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className="fields-container">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="fields-container">
                    <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required/>
                    <label htmlFor="confirm">Confirm Password</label>
                </div>
            </div>
            <button type="submit" onClick={saveData}>Create Account</button>
        </form>
        <Copyright />
    </div>
  )
}

export default SignUpPersonnel