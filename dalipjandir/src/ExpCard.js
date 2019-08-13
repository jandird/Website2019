import React from 'react';

import './resources/css/QuestJournal.css';
import CardSkill from "./CardSkill";

class ExpCard extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            expanded: false,
            logo: "col-12",
            details: "col-0 details"
        };

        this.expand = this.expand.bind(this);
        this.show = this.show.bind(this);
    }

    render () {
        let skillClass = this.props.skillClass;
        let skills = [];
        if (this.props.skills !== undefined){
            skills = this.props.skills.map(function (skill, index) {
                return (<CardSkill key={index} skill={skill} skillClass={skillClass}/>)});
        }

        return (
            <div onClick={() => this.expand()}>
                <div className={this.props.wrappers} onClick={this.props.clicked}>
                    <div className={this.props.cardClass}>
                        <div className="container-fluid">
                            <div className="row title-row">
                                <p className="project-title">{this.props.title}</p>
                            </div>
                            <div className="row logo-row anim-row justify-content-center">
                                <div className={this.state.logo}>
                                    <img src={this.props.projectImg} alt="mcmaster" className={this.props.imgClass}/>
                                </div>
                                <div className={this.state.details}>
                                    <ul>
                                        <li>Dalip is a member of McMaster's Competitive Programming Team</li>
                                        <li>Dalip has competed in a variety of competitions including ICPC, Communitech's Code to Win, and Hackerrank Competitions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {skills}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    expand () {
        setTimeout (this.show.bind(null), 500)
    }

    show () {
        if (this.state.expanded === false) {
            this.setState({
                expanded: true,
                logo: "col-lg-3",
                details: "col-lg-9 details show"
            })
        }
        else {
            this.setState({
                expanded: false,
                logo: "col-12",
                details: "col-0 details"
            })
        }
    }
}

export default ExpCard