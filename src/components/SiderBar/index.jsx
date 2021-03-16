import React from 'react';
import { useHistory } from 'react-router';
import "./style.css"

function SiderBar({ isOpen, toggle }) {
const history =useHistory();
    const divStyle = {
        opacity: (isOpen) ? "100%" : "0",
        top: (isOpen) ? "0" : "-100%",
    };

    return (
        <div className="siderbar-container" style={divStyle}>
            <div className="siderbar-icon">
                <i className="fas fa-times" onClick={toggle}></i>
            </div>
            <div className="siderbar-menu">
                <a href="#about"><p className="siderbar-menuitem" onClick={toggle}>About Me</p></a>
                <a href="#discover"><p className="siderbar-menuitem" onClick={toggle}>Discover</p></a>
                <a href="#service"><p className="siderbar-menuitem" onClick={toggle}>Services</p></a>   
            </div>
            <div className="siderbar-signup" onClick={()=>history.push("/signin")}>
                <button className="siderbar-button-signup" onClick={toggle}>Say Hello</button>
            </div>
        </div>
    );
}

export default SiderBar;