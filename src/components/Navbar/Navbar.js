import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-header">
            <div className="nav-icon">
                <div> <img src="/images/Bangladesh_Cricket.png" alt="" /></div>
                <div><h2>BD National Cricket Team</h2></div>
            </div>
            <div className="navbar">
                <ul>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Users</a>
                    <a href="">Service</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;