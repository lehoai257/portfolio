import React from 'react';
import "./style.css";

function Footer(props) {
    return (
        <div className="footer-container">
            <div className="footer-wrap">
                <div className="footer-link-container">
                    <p>Living, learning, & leveling up one day at a time.</p>
                </div>
                <div className="footer-social">
                    <div className="footer-social-wrap">
                        <p className="footer-social-logo">hoailv</p>
                        <p className="footer-website-right">hoailv&copy; {new Date().getFullYear()} All rights reserved</p>
                        <div className="footer-social-icon">
                            <div className="footer-social-icon-link">
                                <a href="https://facebook.com/lehoai257"><i className="fab fa-facebook"></i></a>
                            </div>
                            <div className="footer-social-icon-link">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="footer-social-icon-link">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <div className="footer-social-icon-link">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="footer-social-icon-link">
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;