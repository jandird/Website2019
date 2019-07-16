import React from 'react';

import './resources/css/QuestJournal.css';

class QuestCard extends React.Component{

    render () {
        return (
            <div className="wrapper quest-wrapper">
                <div className={this.props.cardClass} onClick={this.props.cardTransition}>
                    <p className="card-title">{this.props.title}</p>
                    <img src={this.props.questImg} alt="questImg" className={this.props.imgClass}/>
                </div>
            </div>
        );
    }
}

export default QuestCard