/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : SignUpBG.js
Stylesheet      : SignUpBG.css
Description     : 
    This component is added to the signup page and will be the background.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 25, 2025
-------------------------------------------------------------------------------------
*/



import "./SignUpBG.css"
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom"

const SignUpBG = () => {
    return (
        <div className="signup-bg-wrapper">
            <div className="back-container">
                <Link to="/#">
                    <label className="back-text">Back to Home</label>
                    <FaLongArrowAltLeft className="back" /> 
                </Link>
            </div>
        </div>
    )
}

export default SignUpBG;