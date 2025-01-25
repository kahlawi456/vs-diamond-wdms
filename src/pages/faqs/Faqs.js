/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : Faqs.js
Stylesheet      : Faqs.css
Description     : 
    This page shows the frequently asked questions that are asked by the costumers of
the VSDiamond Dental Clinic along with the respective answers.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import "./Faqs.css";
import { Link } from "react-router-dom";

export default function Faqs() {
    return (
        <div>
            <title>Frequently Asked Questions</title>

            <h2>FAQS Page</h2>
            <div className="links">
                <Link to="/About" className="about">About</Link>
                <Link to="/Contact" className="contact">Contact</Link>
                <Link to="/#" className="login">Home</Link>
            </div>
        </div>
    )
}