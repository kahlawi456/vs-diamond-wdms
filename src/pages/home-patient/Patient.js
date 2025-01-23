import Header from "../../components/head-patient/HeadPatient"
import "./Patient.css"
import Copyright from "../../components/copyright/Copyright"
import { Link } from "react-router-dom"

export default function Patient() {
    return (
        <div className="wrapper-patient">
            <Header />
            <h2>Patient Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/About" className="about">About</Link>
            </div>
            <div className="def-wrapper">
                <p className="def">A premier dental clinic in the south Cebu City, Philippines ready to bring brighter smiles with excellent service at affordable rates. </p>
            </div>
            <div className="tagline-wrapper">
                <p className="tagline">Smile bright like a Diamond</p>
            </div>
            <Copyright />
        </div>
    )
}