/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : About.js
Stylesheet      : About.css
Description     : 
    This page shows the basic information of the VSDiamond Dental Clinic. This shows
the users the about information of the doctors, the clinic, and etc.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 24, 2025
-------------------------------------------------------------------------------------
*/



import "./About.css"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <title>About Us</title>

            <h2>About Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/Contact" className="contact">Contact</Link>
            </div>
        </div>
    )
}