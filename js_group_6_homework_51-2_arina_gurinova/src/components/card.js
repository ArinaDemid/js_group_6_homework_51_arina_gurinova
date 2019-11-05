import React from "react";

const Card = props => {

    return (
        <div className='card'>
            <img src={props.post} alt='post photo'/>
            <h1 className='title'>{props.name}</h1>
            <p className='year'>Year: {props.year}</p>
            <p className='description'>Description: {props.description}</p>
        </div>
    )
};

export default Card;
