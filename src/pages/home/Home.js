import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>FAQS Page</h2>
            <div className="links">
                <Link to="/About" className="about">About</Link>
                <Link to="/Contact" className="contact">Contact</Link>
                <Link to="/#" className="login">Home</Link>
            </div>
        </div>
    )
}