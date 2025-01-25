/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : December 28, 2024
File            : HomePersonnel.js
Stylesheet      : HomePersonnel.css
Description     : 
    This page shows the homepage of the personnel. This will be their dashboard where
most of the features of the web application can be accessed.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import Header from "../../components/head-personnel/HeadPersonnel"
import "./HomePersonnel.css"
import Copyright from "../../components/copyright/Copyright"
import { Link } from "react-router-dom";

export default function HomePersonnel() {
    return (
        <div className="wrapper-personnel">
            <title>Dashboard</title>

            <Header />
            <h2 className="text">Personnel Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/About" className="about">About</Link>
            </div>
            <div className="def-wrapper-personnel">
                <p className="def-personnel">A premier dental clinic in the south Cebu City, Philippines ready to bring brighter smiles with excellent service at affordable rates. </p>
            </div>
            <div className="tagline-wrapper-personnel">
                <p className="tagline-personnel">Smile bright like a Diamond</p>
            </div>
            <Copyright />
        </div>
    )
}