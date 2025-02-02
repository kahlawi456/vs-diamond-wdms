/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : February 02, 2025
File            : HeadHomepage.js
Stylesheet      : HeadHomepage.css
Description     : 
    This component is added to the page to show the header of the homepage for the
patients. This will include the menu and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: February 02, 2025
-------------------------------------------------------------------------------------
*/



import "./HeadHomepage.css"
import React from "react";
import logo from "../../assets/head/logo.png";
import facebook from "../../assets/homepage/facebook.png";
import instagram from "../../assets/homepage/instagram.png";
import tiktok from "../../assets/homepage/tiktok.png";
import menu from "../../assets/homepage/menu.png";
import { IoIosNotifications } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeadHomepage = () => {
    return (
        <div className="header-wrapper1">
            <div className="logo-containers">
                <img src={logo} className="logos"/>
            </div>
            <div className="greeting-patient1">
                <div className="text-container">
                    <h2>VSDIAMOND</h2>
                    <h4>DENTAL CLINIC</h4>
                </div>
            </div>
            <div className="link-containers">
                <h2>ABOUT US</h2>
                <h2>SERVICES</h2>
                <h2>DENTISTS</h2>
            </div>
            <div className="socmed-container">
                <img src={facebook} className="socmed"/>
                <img src={instagram} className="socmed"/>
                <img src={tiktok} className="socmed"/>
            </div>
            <Link to="/AppointmentPatient">
                <button type="button" className="header-sign-in-button">Sign in</button>
            </Link>
        </div>
    )
}

export default HeadHomepage;