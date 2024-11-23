import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <div className="header">
            <div>PWL Website</div>
            <ul className="menu-item">
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="project">Project</Link>
                </li>
                <li>
                    <Link to="experience">Experience</Link>
                </li>
            </ul>
            <h1>Welcome to my page</h1>
        </div>
    )
}

export default Header