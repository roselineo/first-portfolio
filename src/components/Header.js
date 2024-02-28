import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="logo-div">ROSELINE OBINNA</div>
            <div className="mobile-menu">
                <FaBars />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="#" className="menu-item">About</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Skills</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Projects</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Contact</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Download My CV</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header