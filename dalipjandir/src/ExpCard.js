import React from 'react';

import './resources/css/QuestJournal.css';
import CardSkill from "./CardSkill";

class ExpCard extends React.Component{

    render () {
        let skillClass = this.props.skillClass;
        let skills = [];
        if (this.props.skills !== undefined){
            skills = this.props.skills.map(function (skill, index) {
                return (<CardSkill key={index} skill={skill} skillClass={skillClass}/>)});
        }

        return (
            <div className={this.props.wrappers} onClick={this.props.clicked}>
                <div className={this.props.cardClass}>
                    <div className="container-fluid">
                        <div className="row title-row">
                            <p className="project-title">{this.props.title}</p>
                        </div>
                        <div className="row logo-row">
                            <img src={this.props.projectImg} alt="mcmaster" className={this.props.imgClass}/>
                        </div>
                        <div className="row justify-content-center">
                            {skills}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpCard