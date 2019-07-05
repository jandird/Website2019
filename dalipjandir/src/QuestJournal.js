import React from 'react';

import './resources/css/QuestJournal.css';

function QuestJournal() {

    return (
        <div id="quest-journal">
            <div className="wrapper">
                <Card id="c0"/>
                <Card id="c1"/>
                <Card id="c2"/>
            </div>
        </div>
    );
}

function Card (props) {

    return (
        <div className="card" id={props.id}>
            <div className="story">
                <div className="info">
                    <h3>Pyramids</h3>
                    <p> Built during a time when Egypt was one of the richest and most powerful civilizations in
                        the world. Their massive scale reflects the unique role that the pharaoh played in
                        ancient Egyptian society.</p>
                </div>
            </div>
        </div>
    );
}

export default QuestJournal;