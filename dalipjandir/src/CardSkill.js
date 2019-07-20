import React from 'react'

class CardSkill extends React.Component {

    render() {
        return (
            <div className="col-4">
                <img src={this.props.skill} alt="skill" className={this.props.skillClass}/>
            </div>
        );
    }
}

export default CardSkill