// import { Link } from "react-router-dom"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Header.css"
import cv from "../cv/doc.docx"

function Header() {
    const [barTimes, setBarTimes] = useState(true)
    
    const handleClick = () => {
        const menu = document.querySelector(".menu")
        menu.classList.toggle("show")
        setBarTimes(!barTimes)
    }
    return (
        <div className="header">
            <div className="logo-div">ROSELINE OBINNA</div>
            <div className="mobile-menu" onClick={handleClick}>
                {barTimes ? <FaBars /> : <FaTimes />}
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#about" className="menu-item" onClick={handleClick}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item" onClick={handleClick}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="menu-item" onClick={handleClick}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="menu-item" onClick={handleClick}>Contact</a>
                    </li>
                    <li>
                        <a href={cv} className="menu-item" onClick={handleClick}>Download My CV</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header