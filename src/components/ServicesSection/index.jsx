import React from 'react';
import "./style.css";
import image1 from "../../images/undraw_react_y7wq.svg"
import image2 from "../../images/undraw_programming_2svr.svg"
import image3 from "../../images/undraw_Mobile_application_mr4r.svg"


function ServicesSection(props) {
    return (
        <div className="services-container" id="service">
            <h1 className="services-h1">My Services</h1>
            <div className="services-wrapper">
                <div className="services-card">
                    <img src={image1} alt="services" className="services-icon" />
                    <h2 className="services-h2">System Engineer</h2>
                    <p className="services-p">I have experience in managing web applications and application servers</p>
                </div>
                <div className="services-card">
                    <img src={image2} alt="services" className="services-icon" />
                    <h2 className="services-h2">Front-endDeveloper</h2>
                    <p className="services-p">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </div>
                <div className="services-card">
                    <img src={image3} alt="services" className="services-icon" />
                    <h2 className="services-h2">Mentor</h2>
                    <p className="services-p">I genuinely care about people, and love helping fellow designers work on their craft.</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
