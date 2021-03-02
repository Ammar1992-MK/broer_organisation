import {React, useState, useEffect} from 'react'
import Typewriter from 'typewriter-effect'
import {Icons} from '../icons/Icons'
import './homePage.css'

export const HomePage = () => {

    return (

        <div className="homePage-main-container">
            <div className="upper-text-container">
            <h1 className="typewriter">Hva gjør vi ?</h1>
                <h2 className="typewriter">
                <Typewriter

                    onInit = {(typewriter) => {
                        
                        typewriter
                        .changeDelay(40)
                        .typeString("Skaper innovative løsninger")
                        .pauseFor(2000)
                        .deleteAll(2)
                        .typeString("Støtter mennesker med spesielle behov")
                        .pauseFor(2000)
                        .deleteAll(2)
                        .typeString("Integrerer syrere i det norske samfunnet")
                        .pauseFor(2000)
                        .deleteAll(2)
                        .start()
                    }}

                    options={{
                        loop: true
                    }}

                />
                </h2>
            </div>

            <div className="cards-container">
                <div className="card">
                    <div className="mission-icon-container">
                        <Icons type="cardIcon1"/>
                    </div>
                    <div className="mission-text-container">
                        <p className="card-text"> Oppmuntrer flyktninger </p>
                    </div>
                </div>
                <div className="card">
                <div className="mission-icon-container">
                <Icons type="cardIcon2"/>
                </div>
                    <div className="mission-text-container">
                        <p className="card-text">Integrering</p>
                    </div>
                </div>
                <div className="card">
                <div className="mission-icon-container">
                <Icons type="cardIcon3"/>
                </div>
                    <div className="mission-text-container">
                        <p className="card-text">Støtte mennesker</p>
                    </div>
                </div>
            </div>

            <div className="video-container">
            <div className="player">
            <iframe title="player" width="422" height="250" src="https://www.youtube.com/embed/vVnDE8wSrVo" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" allowFullscreen>
             </iframe>
           </div>
                <div className="get-to-know-us-container">
                    <Icons type="arrow"/>
                    <p className="get-to-know-us"> bli kjent med oss! </p>
                </div>
                </div> 
        </div>
    );
}