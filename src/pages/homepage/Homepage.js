/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : February 02, 2024
File            : Homepage.js
Stylesheet      : Homepage.css
Description     : 
    This page shows the homepage of the website. This will be the index page as it
will show the features of the website such as the sign up and login feature, viewing
of the services, and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: February 02, 2025
-------------------------------------------------------------------------------------
*/



import React, { useState } from "react";
import "./Homepage.css";
import Header from "../../components/head-homepage/HeadHomepage"
import image from "../../assets/index/image.png";
import Copyright from "../../components/copyright/Copyright"

const Homepage = () => {

    return (
        <div className="index-wrapper1">
            <title>VSDiamond Dental Website - Login or Register</title>

            <Header />

            <div className="image-container">
                <img src={image} className="image-bg"/>
            </div>
            <Copyright/>
        </div>

    );
};

export default Homepage;