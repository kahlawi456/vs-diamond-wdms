import Header from "../../components/head-personnel/HeadPersonnel"
import "./Personnel.css"
import Copyright from "../../components/copyright/Copyright"
import { Link } from "react-router-dom";

export default function Personnel() {
    return (
        <div className="wrapper-personnel">
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