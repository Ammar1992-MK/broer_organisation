import React from 'react'
import './footer.css'
import {Icons} from './Icons/Icons'


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
            {/*<div className="contactus-header">
                <div className="contact-us-text">
                <h1>Ta kontakt !</h1>
                <p>Vi er åpne for ethvert forslag eller bare å chatte</p>
                </div>

                <div className="contact-info-container">
                    <div className="contact-info">
                        <Icons  type="phone"/>
                        <p className="contact-info-text">+47 970 09 897</p>
                    </div>
                    <div className="contact-info">
                        <Icons  type="mail"/>
                        <p className="contact-info-text">broer.org@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <Icons  type="position"/>
                        <p className="contact-info-text">Nils Huus' gate 11 0482 OSLO</p>
                    </div>
                </div>
    </div>*/}

        </div>
    );
}