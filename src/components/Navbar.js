import React from "react";
import ReactLogo from '../img/logo192.png';

const Navbar = () => {
    return (
        <nav className="nav">
            <img src={ReactLogo} className="nav--logo" alt="ReactLogo" />
            <h1 className="nav--text_logo">ReactFacts</h1>
            <p className="nav--title">React Course - Project 1</p>
        </nav>
    );
}

export default Navbar;