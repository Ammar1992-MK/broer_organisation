import React from 'react'
import {Icons} from '../Icons/Icons'
import './contactUs.css'

export const ContactUs = () => {

    return (

        <div className="contactUs-main-container">
            <div className="contactus-header">
                <h1>Ta kontakt !</h1>
                <p>Vi er åpne for ethvert forslag eller bare å chatte</p>

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
            </div>

            <div className="become-memeber-container"></div>
        </div>
    );
}