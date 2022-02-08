import React from "react";
import '../src/App.css'
import { Link } from "react-router-dom";
import Profile from "./Profile";

const NavBar = () => {
    return(
       <div>
            <nav className="logo">
                <h1>Grouper</h1>
                <ul>
                    <li><Link to="/profile">User Profile</Link></li>
                    <li> <Link to="/my-calendar">My Calendar</Link></li>
                    <li><Link to="/group-calendars">Group Calendars</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/github">GitHub</Link></li>
                </ul>
            </nav>
       </div>

    )
}

export default NavBar