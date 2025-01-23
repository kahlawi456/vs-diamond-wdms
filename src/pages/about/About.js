import "./About.css"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h2>About Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/Contact" className="contact">Contact</Link>
            </div>
        </div>
    )
}