/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : HeadPersonnel.js
Stylesheet      : HeadPersonnel.css
Description     : 
    This component is added to the page to show the header of the homepage for the
personnel. This will include the menu and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 24, 2025
-------------------------------------------------------------------------------------
*/



import "./HeadPersonnel.css"
import React from "react";
import logo from "../../assets/head/logo.png";
import { IoIosNotifications } from "react-icons/io";

const HeadPersonnel = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-containers">
                <img src={logo} className="logos"/>
            </div>
            <div className="greeting-personnel">
                <div className="text-container">
                    <h2>Hi, Staff!</h2>
                    <h4>Clinic Staff</h4>
                </div>
            </div>
            <IoIosNotifications className="icons"/>
            <button type="button" className="manage">MANAGE APPOINTMENT</button>
        </div>
    )
}

export default HeadPersonnel;