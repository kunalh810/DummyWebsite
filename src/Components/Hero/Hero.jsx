import React from 'react';
import './Hero.css';
import heroImage from '../assets/banner.png'; 

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Chemicals That Redefine Industry Standards</h1>
                <p className="hero-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <button className="hero-button">Get in Touch</button>
            </div>
            <div className="hero-image-wrapper">
                <img src={heroImage} alt="Chemicals" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;

