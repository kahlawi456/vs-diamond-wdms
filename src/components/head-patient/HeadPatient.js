import "./HeadPatient.css"
import React from "react";
import logo from "../../assets/head/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

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
            <button type="button" className="manage">BOOK APPOINTMENT</button>
            <div className="menu-wrapper-patient">
                <IoMenuSharp className="menu-patient"/>
            </div>
        </div>
    )
}

export default HeadPatient;