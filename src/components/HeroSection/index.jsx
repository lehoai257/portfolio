import React, { useState } from 'react';
import "./style.css"
import videobgg from '../../videos/bg.mp4';


function HeroSection(props) {
   
    
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video autoPlay loop muted >
                    <source src={videobgg} type='video/mp4' />
                </video>
            </div>
            <div className="hero-contents">
                <h1>Designer, Full-stack Developer & Mentor</h1>
                <p>I design and code beautifully simple things, and I love what I do.</p>
                <div className="hero-getstarted">
              
                </div>
            </div>

        </div>
    );
}

export default HeroSection;