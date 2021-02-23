import React from 'react'
import './footer.css'


export const Footer = () => {

    return (

        <div className="footer-main-div">
            <div className="icons-container">
            <img className="insta-icon" src={process.env.PUBLIC_URL + 'Insta.png'} alt ="logo" /> 
            <img className="in-icon" src={process.env.PUBLIC_URL + 'IN.png'} alt ="logo" /> 
            <img className="fb-icon" src={process.env.PUBLIC_URL + 'FB.png'} alt ="logo" /> 
            </div>
        </div>
    );
}