import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import './Header.css'; 
import img from '../assets/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={img} alt="Dummy Logo" />
                
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">HOME</a></li>
                    <li className="nav-item"><a href="#products">PRODUCTS</a></li>
                    <li className="nav-item"><a href="#our-work">OUR WORK</a></li>
                    <li className="nav-item"><a href="#our-company">OUR COMPANY</a></li>
                    <li className="nav-item"><a href="#gallery">GALLERY</a></li>
                    <li className="nav-item contact"><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <FaBars />
            </div>
        </header>
    );
};

export default Header;


