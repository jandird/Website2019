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
                    <QuestCard cardClass="card quest-card card-pink"
                               title='TRAINING QUESTS'
                               questImg={degree}
                               imgClass="quest-type-white"
                    />
                    <ProjectCard/>
                </div>
                <div className="col-lg-4">
                    <QuestCard
                        cardClass="card quest-card card-orange"
                        title="MAIN QUESTS"
                        questImg={tie}
                        imgClass="quest-type-black"
                    />
                    <ProjectCard/>
                </div>
                <div className="col-lg-4">
                    <QuestCard
                        cardClass="card quest-card card-pink"
                        title="SIDE QUESTS"
                        questImg={pencilRuler}
                        imgClass="quest-type-white"
                    />
                    <ProjectCard/>
                </div>
            </div>
        </div>
    );
}

function QuestCard (props) {

    function trainingTransition() {
        let questCards = document.querySelectorAll(".quest-card");
        for (let i = 0; i < questCards.length; ++i) {
            questCards[i].classList.toggle("hide")
        }

        let questWrapper = document.querySelectorAll(".quest-wrapper");
        for (let i = 0; i < questWrapper.length; ++i) {
            questWrapper[i].classList.toggle("hide")
        }

        let trainingCards = document.querySelectorAll(".training-card");
        for (let i = 0; i < trainingCards.length; ++i) {
            trainingCards[i].classList.toggle("show")
        }

        let trainingWrapper = document.querySelectorAll(".training-wrapper");
        for (let i = 0; i < trainingWrapper.length; ++i) {
            trainingWrapper[i].classList.toggle("show")
        }
    }

    return (
        <div className="quest-wrapper">
            <div className={props.cardClass} onClick={trainingTransition}>
                <p className="card-title">{props.title}</p>
                <img src={props.questImg} alt="questImg" className={props.imgClass}/>
            </div>
        </div>
    );
}

function ProjectCard (props) {

    return (
        <div className="training-wrapper">
            <div className="card training-card card-pink">
                <p className="card-title">MCMASTER UNIVERSITY</p>
                <img src={tie} alt="mcmaster"/>
            </div>
        </div>
    );
}

export default QuestJournal;