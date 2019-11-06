import React, {Component} from "react";

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.post} alt='post photo'/>
                <h1 className='title'>{this.props.name}</h1>
                <p className='year'>Year: {this.props.year}</p>
                <p className='description'>Description: {this.props.description}</p>
            </div>
        )
    }
};

export default Card;
