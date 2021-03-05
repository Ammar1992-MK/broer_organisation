import React from 'react'
import {Icons} from '../Icons/Icons'
import './contactUs.css'
import emailjs from 'emailjs-com';

export const ContactUs = () => {

   

    function sendEmail (e) {
        
            e.preventDefault();
        
            emailjs.sendForm('service_2pj4iyd', 'template_a15hxgn', e.target, 'user_a4aLerBsV4MpRFezikB37')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

              e.target.reset();
    }

    return (

        <div className="contactUs-main-container">
            
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
                    <textarea className="text-message" placeholder="Din melding til oss" name="message"></textarea>

                    <input className="submit-btn" type="submit" value="Send"></input>
                </form>

            
            </div>
        </div>
    );
}