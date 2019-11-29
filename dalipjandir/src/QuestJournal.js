import React from 'react';

import './resources/css/QuestJournal.css';

import QuestCard from './QuestCard.js'
import ExpCard from './ExpCard.js'

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

import me from "./resources/images/me.png";
import pongInf from "./resources/images/pong-inf.png"

import android from "./resources/images/skills/android.png"
import java from "./resources/images/skills/java.png";
import kotlin from "./resources/images/skills/kotlin.png";
import python from "./resources/images/skills/python.png";
import spring from "./resources/images/skills/spring.png";
import react from "./resources/images/skills/react.png";
import bootstrap from "./resources/images/skills/bootstrap.png";
import sql from "./resources/images/skills/sql.png";

import github from "./resources/images/github.png"

class QuestJournal extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            type: null,
            backClass: "back-button",
            trainingRow: "row training-row justify-content-center",
            mainRow: "row main-row justify-content-center",
            sideRow: "row side-row justify-content-center",
        };

        this.toggleQuest = this.toggleQuest.bind(this);
        this.toggleProjectRow = this.toggleProjectRow.bind(this);
    }

    render() {
        let mcpSkills = [java, python];
        let fiaSkills = [java, android];

        let arcelorMittalSkills = [kotlin, spring, sql];
        let deloitteSkills = [kotlin, spring, react, python];
        let previewEDSkills = [java];

        let pongInfSkills = [java, android];
        let djSkills = [react, bootstrap];

        return (
            <div id="quest-journal" className="container-fluid">
                <div id="page-top"/>
                
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
                    <button className={this.state.backClass} onClick={() => this.antiToggleProjectRow(this.state.type)}>
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
                            imgClass="quest-img quest-img-white"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <QuestCard
                            cardClass="card quest-card card-orange"
                            cardTransition={() => this.toggleQuest("main")}
                            title="MAIN QUESTS"
                            questImg={tie}
                            imgClass="quest-img quest-img-black"
                        />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <QuestCard
                            cardClass="card quest-card card-pink"
                            cardTransition={() => this.toggleQuest("side")}
                            title="SIDE QUESTS"
                            questImg={pencilRuler}
                            imgClass="quest-img quest-img-white"
                        />
                    </div>
                </div>

                <div className={this.state.trainingRow}>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-pink"
                            title="MCMASTER COMPETITIVE PROGRAMMING"
                            projectImg={mcp}
                            imgClass="exp-img quest-img-white"
                            skills = {mcpSkills}
                            skillClass = "card-skill-img card-skill-white"
                            detailsList = {<ul>
                                                <li>I am a member of McMaster's Competitive Programming Team</li>
                                                <li>As a member of the team I competed in a variety of competitions including ICPC, Communitech's Code to Win, and Hackerrank Competitions</li>
                                           </ul>}
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-orange"
                            title="MCMASTER UNIVERSITY"
                            projectImg={mcmaster}
                            imgClass="exp-img quest-img-black"
                            detailsList = {<ul>
                                                <li>I am currently in my 5th and final year of Software Engineering & Co-Op at McMaster University</li>
                                                <li>Currently maintain a CGPA of 3.7</li>
                                           </ul>}
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-pink"
                            title="FLAG IDENTIFICATION APPLICATION"
                            projectImg={fia}
                            imgClass="exp-img quest-img-white"
                            skills = {fiaSkills}
                            skillClass = "card-skill-img card-skill-white"
                            detailsList = {<ul>
                                                <li>An Android application designed to allow users take a picture of and identify a flag</li>
                                                <li>Project was completed through the use of Java and OpenCV for image recognition</li>
                                                <li>An overall grade of 100% was achieved</li>
                                           </ul>}
                            git = { <a href="https://github.com/jandird/FIA" target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="github" className="git-img quest-img-white"/>
                                        <figcaption> Git Repo </figcaption>
                                    </a> }
                        />
                    </div>
                </div>

                <div className={this.state.mainRow}>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-pink"
                            title="DELOITTE DSPACE"
                            projectImg={deloitte}
                            imgClass="exp-img quest-img-white"
                            skills = {deloitteSkills}
                            skillClass = "card-skill-img card-skill-white"
                            detailsList = {<ul>
                                                <li>Position: Software Engineering / Prototyping Co-Op | May 2019 - Aug 2019</li>
                                                <li>Developed a Blockchain Assurance Full Stack project through Kotlin, Spring Boot, React, and Corda</li>
                                                <li>Worked in an agile scrum environment to provide bi-weekly demos and presentations to stakeholders</li>
                                           </ul>}
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-orange"
                            title="ARCELORMITTAL DOFASCO"
                            projectImg={arcelorMittal}
                            imgClass="exp-img quest-img-black"
                            skills = {arcelorMittalSkills}
                            skillClass = "card-skill-img card-skill-black"
                            detailsList = {<ul>
                                                <li>Position: Software Engineering / Data Analyst Co-Op | May 2018 - Apr 2019</li>
                                                <li>Developed a backend web API to calculate profitability using Kotlin and Spring Boot</li>
                                                <li>Modeled databases, schemas, and tables to support and store data for multiple projects</li>
                                                <li>Developed C# and Java scripts to optimize workflow and efficiency of projects</li>
                                                <li>Worked with Extract, Transform, Load (ETL) Tools to efficiently transform data and
                                                    load tables for a variety of projects and support client platforms</li>
                                           </ul>}
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-pink"
                            title="PREVIEW-ED"
                            projectImg={previewED}
                            imgClass="exp-img"
                            skills = {previewEDSkills}
                            skillClass = "card-skill-img card-skill-white"
                            detailsList = {<ul>
                                                <li>Position: Freelance Software Engineer | Feb 2018 - Jun 2019</li>
                                                <li>Independently designed, implemented, and maintained a Java application that is currently in use by long term care homes</li>
                                                <li>Communicated consistently with the client to gather requirements and maintain application</li>
                                           </ul>}
                        />
                    </div>
                </div>

                <div className={this.state.sideRow}>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-pink"
                            title="PONG INFINITY"
                            projectImg={pongInf}
                            imgClass="exp-img"
                            skills = {pongInfSkills}
                            skillClass = "card-skill-img card-skill-white"
                            detailsList = {<ul>
                                                <li>A game that takes a twist on original Pong. In this game you play against a wall instead of against a player and go for a high-score</li>
                                                <li>Developed with Java for Android</li>
                                           </ul>}
                            git = { <a href="https://github.com/jandird/PongInfinity" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github" className="git-img quest-img-white"/>
                                <figcaption> Git Repo </figcaption>
                            </a> }
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            cardClass="card-rounded card-orange"
                            title="DALIPJANDIR.CA"
                            projectImg={me}
                            imgClass="exp-img"
                            skills = {djSkills}
                            skillClass = "card-skill-img card-skill-black"
                            detailsList = {<ul>
                                                <li>I like to think that the website speaks for itself</li>
                                                <li>Built using ReactJS</li>
                                           </ul>}
                            git = { <a href="https://github.com/jandird/Website2019" target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="github" className="git-img quest-img-black"/>
                                        <figcaption> Git Repo </figcaption>
                                    </a> }
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

        setTimeout(this.toggleProjectRow.bind(null, type), 500);
    }

    toggleProjectRow (type) {
        let stateType = this.state.type;
        if (stateType === null){
            this.setState({type: type, backClass: "back-button show"});
        }
        else {
            this.setState({type: null, backClass: "back-button"});
        }

        let cards = document.querySelectorAll("." + type + "-card");
        for (let i = 0; i < cards.length; ++i) {
            cards[i].classList.toggle("show");
        }

        let wrapper = document.querySelectorAll("." + type + "-wrapper");
        for (let i = 0; i < wrapper.length; ++i) {
            wrapper[i].classList.toggle("show");
        }

        document.querySelector("." + type + "-row").classList.toggle("show");
        document.querySelector(".quest-row").classList.toggle("hide");
    }

    antiToggleProjectRow (type) {
        let stateType = this.state.type;
        if (stateType === null){
            this.setState({type: type, backClass: "back-button show"})
        }
        else {
            this.setState({type: null, backClass: "back-button"})
        }

        let cards = document.querySelectorAll("." + type + "-card");
        for (let i = 0; i < cards.length; ++i) {
            cards[i].classList.toggle("show")
        }

        let wrapper = document.querySelectorAll("." + type + "-wrapper");
        for (let i = 0; i < wrapper.length; ++i) {
            wrapper[i].classList.toggle("show")
        }

        document.querySelector("." + type + "-row").classList.toggle("show");
        document.querySelector(".quest-row").classList.toggle("hide");

        setTimeout(QuestJournal.antiToggleQuest.bind(null), 50);
    }

    static antiToggleQuest() {
        let questCards = document.querySelectorAll(".quest-card");
        for (let i = 0; i < questCards.length; ++i) {
            questCards[i].classList.toggle("hide")
        }

        let questWrapper = document.querySelectorAll(".quest-wrapper");
        for (let i = 0; i < questWrapper.length; ++i) {
            questWrapper[i].classList.toggle("hide")
        }
    }

    static toggleWrapper(wrapper){
        let wrappers = document.querySelectorAll(wrapper);
        for (let i = 0; i < wrappers.length; ++i) {
            wrappers[i].classList.toggle("clicked")
        }
    }
}

export default QuestJournal;