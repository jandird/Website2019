import React from 'react';

import './resources/css/QuestJournal.css';
import CardSkill from "./CardSkill";

class ExpCard extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            details: "col-0 details"
        };


        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    render () {
        let skillClass = this.props.skillClass;
        let skills = [];
        if (this.props.skills !== undefined){
            skills = this.props.skills.map(function (skill, index) {
                return (<CardSkill key={index} skill={skill} skillClass={skillClass}/>)});
        }

        return (
            <div className="exp-card" onMouseEnter={this.show} onMouseLeave={this.hide}>
                <div className={this.props.wrappers} onClick={this.props.clicked}>
                    <div className={this.props.cardClass}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p className="project-title">{this.props.title}</p>
                                </div>
                                <div className="col-lg-4">
                                    <img src={this.props.projectImg} alt="mcmaster" className={this.props.imgClass}/>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        {skills}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className={this.state.details}>
                                    <ul>
                                        <li>Dalip is a member of McMaster's Competitive Programming Team</li>
                                        <li>Dalip has competed in a variety of competitions including ICPC, Communitech's Code to Win, and Hackerrank Competitions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    show () {
        this.setState({
            details: "col-12 details show"
        })
    }

    hide () {
        this.setState({

            details: "col-0 details"
        })
    }
}

export default ExpCard