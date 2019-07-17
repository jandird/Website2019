import React from 'react';

import './resources/css/QuestJournal.css';

class ProjectCard extends React.Component{

    render () {
        return (
            <div className={this.props.wrappers} onClick={this.props.clicked}>
                <div className={this.props.cardClass}>
                    <p className="project-title">{this.props.title}</p>
                    <img src={this.props.projectImg} alt="mcmaster" className={this.props.imgClass}/>
                </div>
            </div>
        );
    }
}

export default ProjectCard