import React from 'react';

import About from './About.js'
import QuestJournal from './QuestJournal.js'

import './resources/css/App.css';

import sword from './resources/images/Sword.png'
import wand from './resources/images/Wand.png'

function Main() {
    return (
        <div id="main">
            <div id="intro">
                <div id="birds">
                    <Birds/>
                </div>
                <div id="name" className="text-center">
                    <p>Welcome to the Legend of <span className="bold-name">Dalip Jandir</span></p>
                    <p>This is his Story</p>
                </div>
                <button id="startButton" onClick={topTransition}>Start</button>
            </div>
            <div id="aboutComp">
                <About id="about"/>
            </div>
            <div>
                <QuestJournal/>
            </div>
        </div>
    );

    function topTransition(){
        document.getElementById('about').scrollIntoView();
    }
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
