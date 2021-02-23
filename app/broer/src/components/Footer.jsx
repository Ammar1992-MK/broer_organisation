import React from 'react'
import './footer.css'


export const Footer = () => {

    return (

        <div className="footer-main-div">
            <div className="info-container">
                <p>Org.nr 922 100 020</p>
                <p>Nils Huus' gate 11
                    0482 OSLO</p>
            </div>


            <div className="copy-right-container">
                <p>Copyright © Broer {new Date().getFullYear()}</p>
            </div>
            <div className="icons-container">
            <img className="icon" src={process.env.PUBLIC_URL + 'Insta.png'} alt ="logo" /> 
            <img className="icon" src={process.env.PUBLIC_URL + 'IN.png'} alt ="logo" /> 
            <img className="icon" src={process.env.PUBLIC_URL + 'FB.png'} alt ="logo" /> 
            </div>
        </div>
    );
}