import React from 'react';

import About from './About.js'
import QuestJournal from './QuestJournal.js'

import './resources/css/App.css';

import github from './resources/images/github.png'
import linkedIn from './resources/images/linkedIn.png'
import ContactMe from "./ContactMe";


class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            aboutStyle: {
                position: "absolute",
                top: '100%'
            }
        };
    }
    render () {
        return (
            <div id="main">
                <div id="intro">
                    <div id="birds">
                        <Birds/>
                    </div>
                    <div id="name" className="text-center">
                        <p>Welcome to the Legend of <span className="bold-name">Dalip Jandir</span></p>
                        <p>This is his Story</p>
                        <div className="container">
                            <div className="row">
                                <div className="center-div">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dalip-jandir/">
                                        <img src={linkedIn} alt="linkedIn" className="portfolio-img"/>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jandird">
                                        <img src={github} alt="github" className="portfolio-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <button className="homeButton" onClick={this.start}>Resume</button>
                            </div>
                            <div className="row">
                                <button className="homeButton" onClick={this.start}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={this.state.aboutStyle}>
                    <About id="about"/>
                    <QuestJournal/>
                    <ContactMe/>
                </div>
            </div>
        );
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

export default App;
