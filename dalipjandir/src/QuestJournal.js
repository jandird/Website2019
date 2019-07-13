import React from 'react';

import './resources/css/QuestJournal.css';

import degree from './resources/images/degree.png'
import tie from './resources/images/tie.png'
import pencilRuler from './resources/images/pencil-ruler.png'

import mcp from './resources/images/mcp.png'
import mcmaster from './resources/images/mcmaster.png'
import fia from './resources/images/fia.png'

function QuestJournal() {

    return (
        <div id="quest-journal" className="container-fluid">
            <h1 className="text-center">Quest Journal</h1>
            <div id="underline"/>
            <div id="smallUnderline"/>

            <div className="row">
                <div className="col-lg-4">
                    <QuestCard
                        cardClass="card quest-card card-pink"
                        title='TRAINING QUESTS'
                        questImg={degree}
                        imgClass="quest-type-white"
                    />
                    <ProjectCard
                        wrapper="training-wrapper"
                        cardClass="card training-card card-pink"
                        title="MCMASTER COMPETITIVE PROGRAMMING"
                        projectImg={mcp}
                        imgClass="quest-type-white"
                    />
                </div>
                <div className="col-lg-4">
                    <QuestCard
                        cardClass="card quest-card card-orange"
                        title="MAIN QUESTS"
                        questImg={tie}
                        imgClass="quest-type-black"
                    />
                    <ProjectCard
                        wrapper="training-wrapper"
                        cardClass="card training-card card-orange"
                        title="MCMASTER UNIVERSITY"
                        projectImg={mcmaster}
                        imgClass="quest-type-black"
                    />
                </div>
                <div className="col-lg-4">
                    <QuestCard
                        cardClass="card quest-card card-pink"
                        title="SIDE QUESTS"
                        questImg={pencilRuler}
                        imgClass="quest-type-white"
                    />
                    <ProjectCard
                        wrapper="training-wrapper"
                        cardClass="card training-card card-pink"
                        title="FLAG IDENTIFICATION APPLICATION"
                        projectImg={fia}
                        imgClass="quest-type-white"
                    />
                </div>
            </div>
        </div>
    );
}

function QuestCard (props) {

    function toggleQuest() {
        let questCards = document.querySelectorAll(".quest-card");
        for (let i = 0; i < questCards.length; ++i) {
            questCards[i].classList.toggle("hide")
        }

        let questWrapper = document.querySelectorAll(".quest-wrapper");
        for (let i = 0; i < questWrapper.length; ++i) {
            questWrapper[i].classList.toggle("hide")
        }

        setTimeout(trainingTransition, 500)
    }

    function trainingTransition() {
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
            <div className={props.cardClass} onClick={toggleQuest}>
                <p className="card-title">{props.title}</p>
                <img src={props.questImg} alt="questImg" className={props.imgClass}/>
            </div>
        </div>
    );
}

function ProjectCard (props) {

    return (
        <div className={props.wrapper}>
            <div className={props.cardClass}>
                <p className="project-title">{props.title}</p>
                <img src={props.projectImg} alt="mcmaster" className={props.imgClass}/>
            </div>
        </div>
    );
}

export default QuestJournal;