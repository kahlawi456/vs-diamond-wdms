import "./Recovery.css"
import { Link } from "react-router-dom";

export default function Recovery() {
    return (
        <div>
            <h2>Recovery Page</h2>
            <div className="links">
                <Link to="/#" className="home">Home</Link>
                <Link to="/Contact" className="contact">Contact</Link>
            </div>
        </div>
    )
}