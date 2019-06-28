import React from 'react';

import About from './About.js'

import './resources/css/App.css';

import sword from './resources/images/Sword.png'
import wand from './resources/images/Wand.png'

function Main() {
    function topTransition(){
        document.querySelector("#takeThis").classList.toggle("active");
        document.querySelector("#takeCont").classList.toggle("active");
    }

    function wandClicked(){

    }

    return (
        <div id="Main">
            <div id="Birds">
                <Birds/>
            </div>
            <div id="Name" className="text-center">
                <p>Welcome to the Legend of <span className="bold-name">Dalip Jandir</span></p>
                <p>This is his Story</p>
            </div>
            <button id="startButton" onClick={topTransition}>Start</button>

            <div id="takeThis">
                <div id="takeCont" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <p id="dangerous" className="text-center">IT'S DANGEROUS TO GO ALONE. TAKE THIS!</p>
                        </div>
                    </div>
                    <div id="wRow" className="row text-center">
                        <div className="col-12 col-md-6 weapons">
                            <button className="weaponButton">
                                <p className="mode">EASY MODE</p>
                                <img src={wand} alt="wand"/>
                                <p className="weaponDesc">ONE SWISH AND THE WORK IS DONE</p>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 weapons">
                            <button className="weaponButton">
                                <p className="mode">HARD MODE</p>
                                <img src={sword} alt="sword"/>
                                <p className="weaponDesc">I WANT TO SLASH SOME THINGS</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="aboutComp">
                <About/>
            </div>
        </div>
    );
}

class Birds extends React.Component {
    componentDidMount() {
        this.effect = window.VANTA.BIRDS({
            el: "#background",
            backgroundColor: 0x171f29,
            color1: 0x03a9f4,
            color2: 0xe91e63,
            colorMode: "lerpGradient",
            quantity: 3,
            wingSpan: 40.00,
            separation: 80.00
        })
    }
    componentWillUnmount() {
        if (this.effect) this.effect.destroy()
    }
    render() {
        return <div id="background"/>
    }
}

export default Main;
