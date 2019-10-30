import React from 'react';

import About from './About.js'
import QuestJournal from './QuestJournal.js'

import './resources/css/App.css';

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            aboutStyle: {
                position: "absolute",
                top: '100%'
            }
        };

        this.start = this.start.bind(this);
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
                    </div>
                    <div id="btn-container" className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <button id="startButton" onClick={this.start}>Resume</button>
                            </div>
                            <div className="col-lg-4 text-center">
                                <button id="startButton" onClick={this.start}>Start</button>
                            </div>
                            <div className="col-lg-4 text-center">
                                <button id="startButton" onClick={this.start}>Transcript</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={this.state.aboutStyle}>
                    <About id="about"/>
                    <QuestJournal/>
                </div>
            </div>
        );
    }

    start(){
        // this.setState({
        //     aboutStyle: {
        //         display: "block",
        //         position: "absolute",
        //         transition: "0.5s ease-in",
        //         top: '100%'
        //     }
        // });

        // setTimeout(this.transition.bind(this), 50)
    }

    transition() {
        // this.setState({
        //     aboutStyle: {
        //         display: "block",
        //         position: "absolute",
        //         transition: "0.75s ease-in",
        //         top: '50%'
        //     }
        // });
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
