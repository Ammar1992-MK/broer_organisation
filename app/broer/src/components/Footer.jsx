import React from 'react'
import './footer.css'
import {Icons} from './icons/Icons'


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
            <Icons className="socialmedia-icon" type="facebook" />
            <Icons className="socialmedia-icon" type="instagram" />
            <Icons className="socialmedia-icon" type="linkedin"/>
            </div>
        </div>
    );
}