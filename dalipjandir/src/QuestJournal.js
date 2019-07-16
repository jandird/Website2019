import React from 'react';

import './resources/css/QuestJournal.css';

import QuestCard from './QuestCard.js'
import ProjectCard from './ProjectCard.js'

import back from './resources/images/back.png'

import degree from './resources/images/degree.png'
import tie from './resources/images/tie.png'
import pencilRuler from './resources/images/pencil-ruler.png'

import mcp from './resources/images/mcp.png'
import mcmaster from './resources/images/mcmaster.png'
import fia from './resources/images/fia.png'

import arcelorMittal from './resources/images/arcelor-mittal.png'
import deloitte from './resources/images/deloitte.png'
import previewED from './resources/images/preview-ed.png'

class QuestJournal extends React.Component{

    constructor (props){
        super(props);
        this.toggleQuest = this.toggleQuest.bind(this);
    }

    render() {
        return (
            <div id="quest-journal" className="container-fluid">

                <div className="row">
                    <h1 className="text-center">Quest Journal</h1>
                </div>
                <div className="row">
                    <div id="underline"/>
                </div>
                <div className="row">
                    <div id="smallUnderline"/>
                </div>
                <div className="row">
                    <button id="back-button">
                        <img src={back} alt="back" id="back-img"/>
                    </button>
                </div>

                <div className="row quest-row">
                    <div className="col-lg-4 col-md-6">
                        <QuestCard
                            cardClass="card quest-card card-pink"
                            cardTransition={() => this.toggleQuest("training")}
                            title='TRAINING QUESTS'
                            questImg={degree}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <QuestCard
                            cardClass="card quest-card card-orange"
                            cardTransition={() => this.toggleQuest("main")}
                            title="MAIN QUESTS"
                            questImg={tie}
                            imgClass="quest-type-black"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <QuestCard
                            cardClass="card quest-card card-pink"
                            cardTransition={() => this.toggleQuest("side")}
                            title="SIDE QUESTS"
                            questImg={pencilRuler}
                            imgClass="quest-type-white"
                        />
                    </div>
                </div>

                <div className="row training-row">
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            cardClass="card training-card card-pink"
                            title="MCMASTER COMPETITIVE PROGRAMMING"
                            projectImg={mcp}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            cardClass="card training-card card-orange"
                            title="MCMASTER UNIVERSITY"
                            projectImg={mcmaster}
                            imgClass="quest-type-black"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            cardClass="card training-card card-pink"
                            title="FLAG IDENTIFICATION APPLICATION"
                            projectImg={fia}
                            imgClass="quest-type-white"
                        />
                    </div>
                </div>

                <div className="row main-row">
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-pink"
                            title="ARCELORMITTAL DOFASCO"
                            projectImg={arcelorMittal}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-orange"
                            title="DELOITTE DSPACE"
                            projectImg={deloitte}
                            imgClass="quest-type-black"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ProjectCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-pink"
                            title="PREVIEW-ED"
                            projectImg={previewED}
                            imgClass="quest-type-white"
                        />
                    </div>
                </div>

                <div className="row side-row">
                    <div className="col-lg-6">
                        <ProjectCard
                            wrappers="wrapper side-wrapper"
                            cardClass="card side-card card-pink"
                            title="PONG INFINITY"
                            projectImg={mcp}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className="col-lg-6">
                        <ProjectCard
                            wrappers="wrapper side-wrapper"
                            cardClass="card side-card card-orange"
                            title="DALIPJANDIR.CA"
                            projectImg={mcp}
                            imgClass="quest-type-white"
                        />
                    </div>
                </div>
            </div>
        );
    }

    toggleQuest(type) {
        let questCards = document.querySelectorAll(".quest-card");
        for (let i = 0; i < questCards.length; ++i) {
            questCards[i].classList.toggle("hide")
        }

        let questWrapper = document.querySelectorAll(".quest-wrapper");
        for (let i = 0; i < questWrapper.length; ++i) {
            questWrapper[i].classList.toggle("hide")
        }

        if (type === "training"){
            setTimeout(this.trainingTransition, 500)
        }
        else if (type === "main"){
            setTimeout(this.mainTransition, 500)
        }
        else {
            setTimeout(this.sideTransition, 500)
        }
    }

    trainingTransition() {
        let trainingCards = document.querySelectorAll(".training-card");
        for (let i = 0; i < trainingCards.length; ++i) {
            trainingCards[i].classList.toggle("show")
        }

        let trainingWrapper = document.querySelectorAll(".training-wrapper");
        for (let i = 0; i < trainingWrapper.length; ++i) {
            trainingWrapper[i].classList.toggle("show")
        }

        document.querySelector(".training-row").classList.toggle("show")
    }

    mainTransition() {
        let mainCards = document.querySelectorAll(".main-card");
        for (let i = 0; i < mainCards.length; ++i) {
            mainCards[i].classList.toggle("show")
        }

        let mainWrapper = document.querySelectorAll(".main-wrapper");
        for (let i = 0; i < mainWrapper.length; ++i) {
            mainWrapper[i].classList.toggle("show")
        }

        document.querySelector(".main-row").classList.toggle("show")
    }

    sideTransition() {
        let sideCards = document.querySelectorAll(".side-card");
        for (let i = 0; i < sideCards.length; ++i) {
            sideCards[i].classList.toggle("show")
        }

        let sideWrapper = document.querySelectorAll(".side-wrapper");
        for (let i = 0; i < sideWrapper.length; ++i) {
            sideWrapper[i].classList.toggle("show")
        }

        document.querySelector(".side-row").classList.toggle("show")
    }
}

export default QuestJournal;