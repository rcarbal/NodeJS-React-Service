import React from 'react';

import '../Smooth.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href='/' className="nav_brand">
                <span className="fa-stack">
                    <i className="far fa-circle fa-stack-2x"></i>
                    <i className="far fa-paper-plane fa-stack-1x"></i>
                </span>
            </a>
        </nav>
    )
};

export default Navbar;