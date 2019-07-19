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

        this.state = {mcpSize: "col-lg-4 col-md-6", mcmasterSize: "col-lg-4 col-md-6", fiaSize: "col-lg-4 col-md-12",
        trainingRow: "row training-row justify-content-md-center"};

        QuestJournal.toggleQuest = QuestJournal.toggleQuest.bind(this);
        this.toggleProjectCard = this.toggleProjectCard.bind(this);
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
                            cardTransition={() => QuestJournal.toggleQuest("training")}
                            title='TRAINING QUESTS'
                            questImg={degree}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <QuestCard
                            cardClass="card quest-card card-orange"
                            cardTransition={() => QuestJournal.toggleQuest("main")}
                            title="MAIN QUESTS"
                            questImg={tie}
                            imgClass="quest-type-black"
                        />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <QuestCard
                            cardClass="card quest-card card-pink"
                            cardTransition={() => QuestJournal.toggleQuest("side")}
                            title="SIDE QUESTS"
                            questImg={pencilRuler}
                            imgClass="quest-type-white"
                        />
                    </div>
                </div>

                <div className={this.state.trainingRow}>
                    <div className={this.state.mcpSize}>
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            clicked={() => this.toggleProjectCard({mcpSize : "col-lg-12", mcmasterSize : "invisible", fiaSize : "invisible"},
                                ".training-wrapper", {trainingRow: "row training-row show justify-content-md-start"})}
                            cardClass="card training-card card-pink"
                            title="MCMASTER COMPETITIVE PROGRAMMING"
                            projectImg={mcp}
                            imgClass="quest-type-white"
                        />
                    </div>
                    <div className={this.state.mcmasterSize}>
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            clicked={() => this.toggleProjectCard({mcpSize : "invisible", mcmasterSize : "col-lg-12", fiaSize : "invisible"},
                                ".training-wrapper", {trainingRow: "row training-row show justify-content-md-center"})}
                            cardClass="card training-card card-orange"
                            title="MCMASTER UNIVERSITY"
                            projectImg={mcmaster}
                            imgClass="quest-type-black"
                        />
                    </div>
                    <div className={this.state.fiaSize}>
                        <ProjectCard
                            wrappers="wrapper training-wrapper"
                            clicked={() => this.toggleProjectCard({mcpSize : "invisible", mcmasterSize : "invisible", fiaSize : "col-lg-12"},
                                ".training-wrapper", {trainingRow: "row training-row show justify-content-md-end"})}
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

    static toggleQuest(type) {
        let questCards = document.querySelectorAll(".quest-card");
        for (let i = 0; i < questCards.length; ++i) {
            questCards[i].classList.toggle("hide")
        }

        let questWrapper = document.querySelectorAll(".quest-wrapper");
        for (let i = 0; i < questWrapper.length; ++i) {
            questWrapper[i].classList.toggle("hide")
        }

        setTimeout(QuestJournal.toggleProjectRow.bind(null, type), 500);
    }

    static toggleProjectRow (type) {

        let cards = document.querySelectorAll("." + type + "-card");
        for (let i = 0; i < cards.length; ++i) {
            cards[i].classList.toggle("show")
        }

        let wrapper = document.querySelectorAll("." + type + "-wrapper");
        for (let i = 0; i < wrapper.length; ++i) {
            wrapper[i].classList.toggle("show")
        }

        document.querySelector("." + type + "-row").classList.toggle("show")
    }

    toggleProjectCard (card, wrapper, row) {
        this.setState(card);
        this.setState(row)

        let wrappers = document.querySelectorAll(wrapper);
        for (let i = 0; i < wrappers.length; ++i) {
            wrappers[i].classList.toggle("clicked")
        }
    }
}

export default QuestJournal;