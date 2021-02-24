import {React} from 'react'
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
                        <p className="card-text">Integrering gjennom kurs og foredrag</p>
                    </div>
                </div>
                <div className="card">
                <div className="mission-icon-container">
                <Icons type="cardIcon3"/>
                </div>
                    <div className="mission-text-container">
                        <p className="card-text">Støtte mennesker med spesielle behov</p>
                    </div>
                </div>
            </div>
        </div>
    );
}