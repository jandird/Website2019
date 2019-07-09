import React from 'react';

import './resources/css/QuestJournal.css';

import degree from './resources/images/degree.png'
import tie from './resources/images/tie.png'
import pencilRuler from './resources/images/pencil-ruler.png'

function QuestJournal() {

    return (
        <div id="quest-journal" className="container-fluid">
            <h1 className="text-center">Quest Journal</h1>
            <div id="underline"/>
            <div id="smallUnderline"/>

            <div className="row">
                <div className="col-lg-4">
                    <QuestCard cardClass="card quest-pink" title='TRAINING QUESTS' questImg={degree} imgClass="quest-type-white"/>
                </div>
                <div className="col-lg-4">
                    <QuestCard cardClass="card quest-orange" title="MAIN QUESTS" questImg={tie} imgClass="quest-type-black"/>
                </div>
                <div className="col-lg-4">
                    <QuestCard cardClass="card quest-pink" title="SIDE QUESTS" questImg={pencilRuler} imgClass="quest-type-white"/>
                </div>
            </div>
        </div>
    );
}

function QuestCard (props) {

    function trainingTransition() {
        let cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; ++i) {
            cards[i].toggle("hide")
        }
    }

    return (
        <div className="wrapper">
            <div className={props.cardClass} onClick={trainingTransition}>
                <p className="quest-title">{props.title}</p>
                <img src={props.questImg} alt="questImg" className={props.imgClass}/>
            </div>
        </div>
    );
}

export default QuestJournal;