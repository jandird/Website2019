import React from 'react';

import './resources/css/QuestJournal.css';
import CardSkill from "./CardSkill";

class ExpCard extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            logo: "col-12",
            details: "col-0 details"
        };

        this.expand = this.expand.bind(this)
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
                            <div className="row logo-row justify-content-center">
                                <div className={this.state.logo}>
                                    <img src={this.props.projectImg} alt="mcmaster" className={this.props.imgClass}/>
                                </div>
                                <div className={this.state.details}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
        this.setState({ logo: "col-6",
            details: "col-6 details show"})
    }
}

export default ExpCard