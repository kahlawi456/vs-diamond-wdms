/*
-------------------------------------------------------------------------------------
Authors         : Alinsonorin, John Myl B., Awi, Joseph Kahl L., Gozon, Daniel Allan
Date Created    : January 26, 2024
File            : AppointmentPatient.js
Stylesheet      : AppointmentPatient.css
Description     : 
    This page shows the appointment booking of the patient. Here they can access the
calendar and the timetable for the doctors' appointments.
Copyright © 2025. All rights reserved.

Last Modified By: Joseph Kahl L. Awi
Last Modified On: January 26, 2025
-------------------------------------------------------------------------------------
*/



import React, { useState } from 'react'
import './AppointmentPatient.css'
import { Link } from "react-router-dom"
import { auth } from '../../database/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../database/Firebase';
import { getDatabase, ref, set, push } from 'firebase/database'
import Copyright from "../../components/copyright/Copyright"
import SignUpBG from "../../components/signup-bg/SignUpBG"

const AppointmentPatient = () => {

  return (
    <div className='make-appointment-container'>
        <title>Book Appointment</title>

        <SignUpBG/>
        <form className='make-appointment'>
            <h2>Sign Up</h2>
            
        </form>
        <Copyright />
    </div>
  )
}

export default AppointmentPatient