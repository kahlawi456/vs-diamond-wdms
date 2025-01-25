/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : Recovery.js
Stylesheet      : Recovery.css
Description     : 
    This page allows the users to recover their account. Inputting their email address
and a code will be sent to their respective email address.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 24, 2025
-------------------------------------------------------------------------------------
*/



import "./Recovery.css"
import { Link } from "react-router-dom";

export default function Recovery() {
    return (
        <div>
            <title>Account Recovery</title>

            <h2>Recovery Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/Contact" className="contact">Contact</Link>
            </div>
        </div>
    )
}