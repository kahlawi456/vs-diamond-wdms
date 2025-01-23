import "./Contact.css"
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/About" className="about">About</Link>
            </div>
        </div>
    )
}