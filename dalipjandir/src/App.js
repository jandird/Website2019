import React from 'react';
import './App.css';

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
        document.querySelector(".top-layer").classList.toggle("active");
        document.querySelector(".top-layer--2").classList.toggle("active");
        document.querySelector(".top-layer--3").classList.toggle("active");
        document.querySelector(".top-layer--4").classList.toggle("active");
        document.querySelector(".top-layer--5").classList.toggle("active");
        document.querySelector("#takeThis").classList.toggle("active");
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

            <div className="top-layer"/>
            <div className="top-layer--2"/>
            <div className="top-layer--3"/>
            <div className="top-layer--4"/>
            <div className="top-layer--5"/>

            <div id="takeThis">
                <p id="dangerous" className="text-center">IT'S DANGEROUS TO GO ALONE. TAKE THIS!</p>
                <div className="container">
                    <div id="wRow" className="row">
                        <div className="col-12 col-md-6 weapons">
                            <p>EASY MODE</p>
                        </div>
                        <div className="col-12 col-md-6 weapons">
                            <p>HARD MODE</p>
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
