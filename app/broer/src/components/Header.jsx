import React from 'react'
import './header.css'

 export const Header = () => {

    return (

        <div className="header-main-div">
            <div className="logo-container">
            <img className="logo" src={process.env.PUBLIC_URL + 'Logo.png'} alt ="logo" /> 
            </div>

            <div className="nav-links-container">
                <p className="nav-link nav-link-ltr">Forside</p>
                <p className="nav-link nav-link-ltr">Om oss</p>
                <p className="nav-link nav-link-ltr">Kontakt oss</p>
            </div>
        </div>
    );
}