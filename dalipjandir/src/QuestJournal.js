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

class QuestJournal extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            trainingRow: "row training-row justify-content-md-center",
            mainRow: "row main-row justify-content-md-center",
            sideRow: "row side-row justify-content-md-center",
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
                    <button id="back-button" onClick={() => this.toggleQuest(this.state.type)}>
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
                            wrappers="training-wrapper"
                            cardClass="card-rounded card-pink"
                            title="MCMASTER COMPETITIVE PROGRAMMING"
                            projectImg={mcp}
                            imgClass="quest-img quest-img-white"
                            skills = {mcpSkills}
                            skillClass = "card-skill-img card-skill-white"
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            wrappers="training-wrapper"
                            cardClass="card-rounded card-orange"
                            title="MCMASTER UNIVERSITY"
                            projectImg={mcmaster}
                            imgClass="quest-img quest-img-black"
                        />
                    </div>
                    <div className="exp-row row">
                        <ExpCard
                            wrappers="training-wrapper"
                            cardClass="card-rounded card-pink"
                            title="FLAG IDENTIFICATION APPLICATION"
                            projectImg={fia}
                            imgClass="quest-img quest-img-white"
                            skills = {fiaSkills}
                            skillClass = "card-skill-img card-skill-white"
                        />
                    </div>
                </div>

                <div className={this.state.mainRow}>
                    <div className={this.state.arcelorMittalSize}>
                        <ExpCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-pink"
                            title="ARCELORMITTAL DOFASCO"
                            projectImg={arcelorMittal}
                            imgClass="quest-img quest-img-white"
                            skills = {arcelorMittalSkills}
                            skillClass = "card-skill-img card-skill-white"
                        />
                    </div>
                    <div className={this.state.deloitteSize}>
                        <ExpCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-orange"
                            title="DELOITTE DSPACE"
                            projectImg={deloitte}
                            imgClass="quest-img quest-img-black"
                            skills = {deloitteSkills}
                            skillClass = "card-skill-img card-skill-black"
                        />
                    </div>
                    <div className={this.state.previewEDSize}>
                        <ExpCard
                            wrappers="wrapper main-wrapper"
                            cardClass="card main-card card-pink"
                            title="PREVIEW-ED"
                            projectImg={previewED}
                            imgClass="quest-img"
                            skills = {previewEDSkills}
                            skillClass = "card-skill-img card-skill-white"
                        />
                    </div>
                </div>

                <div className={this.state.sideRow}>
                    <div className={this.state.pongInfSize}>
                        <ExpCard
                            wrappers="wrapper side-wrapper"
                            cardClass="card side-card card-pink"
                            title="PONG INFINITY"
                            projectImg={pongInf}
                            imgClass="quest-img"
                            skills = {pongInfSkills}
                            skillClass = "card-skill-img card-skill-white"
                        />
                    </div>
                    <div className={this.state.djSize}>
                        <ExpCard
                            wrappers="wrapper side-wrapper"
                            cardClass="card side-card card-orange"
                            title="DALIPJANDIR.CA"
                            projectImg={me}
                            imgClass="quest-img"
                            skills = {djSkills}
                            skillClass = "card-skill-img card-skill-black"
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
            this.setState({type: type})
        }
        else {
            this.setState({type: null})
        }

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

    static toggleWrapper(wrapper){
        let wrappers = document.querySelectorAll(wrapper);
        for (let i = 0; i < wrappers.length; ++i) {
            wrappers[i].classList.toggle("clicked")
        }
    }
}

export default QuestJournal;