import React from 'react';

import './resources/css/QuestJournal.css';

class QuestCard extends React.Component {

    state = {cardState : "card"};

    trainingTransition = () => {
        this.setState({
            cardState : "card-hide"
        });
    };

    render () {
        return (
            <div className="wrapper">
                <div className={this.state.cardState}>
                    <div className={this.props.cardClass} onClick={this.trainingTransition}>
                        <p className="quest-title">{this.props.title}</p>
                        <img src={this.props.questImg} alt="questImg" className={this.props.imgClass}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestCard;