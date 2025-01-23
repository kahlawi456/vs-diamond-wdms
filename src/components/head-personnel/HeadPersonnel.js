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