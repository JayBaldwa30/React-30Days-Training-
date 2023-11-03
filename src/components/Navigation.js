import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';


const Navigation = () => {
    return (
        <nav className="navbar">
            <div>
                <h3>Navigation Menu</h3>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/service">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation