/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : HeadPatient.js
Stylesheet      : HeadPatient.css
Description     : 
    This component is added to the page to show the header of the homepage for the
patients. This will include the menu and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import "./HeadPatient.css"
import React from "react";
import logo from "../../assets/head/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeadPatient = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-containers">
                <img src={logo} className="logos"/>
            </div>
            <div className="greeting-patient">
                <div className="text-container">
                    <h2>Hi, Patient!</h2>
                    <h4>Patient</h4>
                </div>
            </div>
            <IoIosNotifications className="icons"/>
            <Link to="/AppointmentPatient">
                <button type="button" className="manage">BOOK APPOINTMENT</button>
            </Link>
            <div className="menu-wrapper-patient">
                <IoMenuSharp className="menu-patient"/>
            </div>
        </div>
    )
}

export default HeadPatient;