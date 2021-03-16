import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Link, animateScroll as scroll } from "react-scroll"
import "./style.css"


function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const divStyleNaVContainer = {
        background: (scrollNav) ? "#000" : "transparent"
    }
    const history = useHistory()
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <div className="nav-container" style={divStyleNaVContainer}>
            <div className="nav-logo" onClick={toggleHome}>
                <p onClick={() => history.push("/")}>hoailv</p>
            </div>
            <div className="nav-menu">
                <Link to="about" activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}><p className="nav-menuitem" >About me</p></Link>
                <Link to="discover" activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}><p className="nav-menuitem" >Discover</p></Link>
                <Link to="service" activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}><p className="nav-menuitem">Services</p></Link>
                          </div>
            <div className="nav-signup" onClick={() => history.push("/signin")}>
                <button className="nav-button-signup">Say Hello</button>
            </div>
            <i className="fas fa-bars" onClick={toggle}></i>
        </div>
    );
}

export default Navbar;