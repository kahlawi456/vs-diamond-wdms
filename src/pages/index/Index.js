/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : Index.js
Stylesheet      : Index.css
Description     : 
    This page shows the login and registration of the users. This will be the index
page as the users must login to their account, and create account if they don't have
accounts yet.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import React, { useState } from "react";
import "./Index.css";
import { FaUser, FaLock} from "react-icons/fa";
import logo from "../../assets/index/logo.png";
import personnel from "../../assets/index/personnel.png";
import patient from "../../assets/index/patient.png";
import { Link } from "react-router-dom";
import { auth } from '../../database/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Index = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
          await signInWithEmailAndPassword(auth, email, password)
          console.log("Login Successfully")
        } catch(err) {
          console.log(err)
        }
      }

    return (
        <div className="login-wrapper">
            <title>VSDiamond Dental Website - Login or Register</title>

            <div className="left-navbar">
                <center>
                    <div className="logo-container">
                        <img src={logo} className="logo" alt="heaves"/>
                    </div>
                </center>

                <div className="form-box login">
                    <form action="login-form" onSubmit={handleSubmit}>
                        <h1>Welcome Back!</h1>
                        <h4>Start smiling bright like a Diamond with us!</h4>
                        <center>
                        <div className="input-box">
                            <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} required />
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                            <FaLock className="icon"/>
                        </div>
                        <div className="remember-forgot">
                            <Link to="/Recovery">Forgot Password?</Link>
                        </div>
                        </center>

                        <button type="submit">Login</button>

                    </form>
                </div>
            </div>

            <div className="right-navbar">
                <div className="header">
                    <h1>Create Account</h1>
                    <h4>Choose which one are you.</h4>
                </div>

                <div className="choices">
                        <Link to="/SignUpPersonnel">
                            <img src={personnel} className="personnel"/>
                        </Link>
                        <Link to="/SignUpPatient">
                            <img src={patient} className="patient"/>
                        </Link>
                </div>

                <div className="footer">
                    <label className="about">
                        <Link to="/About">ABOUT US</Link>
                    </label>
                    <label className="contact">
                        <Link to="/Contact">CONTACT US</Link>
                    </label>
                    <label className="faqs">
                        <Link to="/Home">FAQS</Link>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default Index;