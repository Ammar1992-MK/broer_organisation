import React from 'react'
import {Icons} from '../Icons/Icons'
import './contactUs.css'

export const ContactUs = () => {

    const sendEmail = () => {

        console.log("email");
    }

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

            <div className="become-memeber-container">

                <form className="from" onSubmit={sendEmail}>
                    <label>Fult Navn</label>
                    <input type="text" className="input" name="name" ></input>
                    <label>Fødselsdato</label>
                    <input type="date" className="input" name="date" ></input>
                    <label>Mobilnummer</label>
                    <input className="input" name="number" ></input>
                    <label>Epost</label>
                    <input type="email" className="input" name="email" ></input>
                    <textarea className="text-message" placeholder="Din melding til oss"></textarea>
                </form>

            
            </div>
        </div>
    );
}