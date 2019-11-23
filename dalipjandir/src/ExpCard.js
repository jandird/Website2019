import React from 'react';
import AnimateHeight from 'react-animate-height'

import './resources/css/QuestJournal.css';
import CardSkill from "./CardSkill";

class ExpCard extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            details: "details",
            height: 'auto',
            oldHeight: 0,
            animationClass: "rah-animating--down"
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
            <AnimateHeight duration={ 500 } height={ this.state.height } className="animate-height">
                <div className="exp-card" onClick={this.show}>
                    <div className="exp-wrapper">
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
                                            {this.props.detailsList}
                                        </ul>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className={this.state.details}>
                                        {this.props.git}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateHeight>
        );
    }

    show () {
        let currentHeights = document.querySelectorAll(".exp-wrapper");
        let currentHeight = 0;

        currentHeights.forEach((c) => {
            if (c.clientHeight !== 0){
                currentHeight = c.clientHeight;
            }
        });

        this.setState({
            height: currentHeight,
            oldHeight: currentHeight
        });

        if (this.state.details === "details"){
            setTimeout(this.expand.bind(this), 50)
        }
        else {
            this.hide();
        }
    }

    expand(){
        this.setState({
            details: "details show",
            height: "auto"
        });
    }

    hide () {
        let oldHeight = this.state.oldHeight;

        this.setState({
            height: oldHeight
        });

        setTimeout(this.collapse.bind(this), 500)
    }

    collapse () {
        this.setState({
            details: "details",
            height: "auto"
        });
    }
}

export default ExpCard