import React from 'react';

import './App.css';

import sword from './resources/images/Sword.png'
import wand from './resources/images/Wand.png'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Main() {
    function topTransition(){
        document.querySelector("#takeThis").classList.toggle("active");
        document.querySelector("#takeCont").classList.toggle("active");
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
                            <a href="https://google.ca">
                                <p className="mode">EASY MODE</p>
                                <img src={wand} alt="wand"/>
                                <p className="weaponDesc">ONE SWISH AND THE WORK IS DONE</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 weapons">
                            <a href="https://google.ca">
                                <p className="mode">HARD MODE</p>
                                <img src={sword} alt="sword"/>
                                <p className="weaponDesc">I WANT TO SLASH SOME THINGS</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class Birds extends React.Component {
    componentDidMount() {
        this.effect = window.VANTA.BIRDS({
            el: "#background",
            backgroundColor: 0x262933,
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
