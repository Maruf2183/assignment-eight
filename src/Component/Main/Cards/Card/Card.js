import './Card.css'

import React from 'react';

const Card = (props) => {
    const developers = props.developer;
    const {image, namme, qualification, age, country, salary,}=developers
    console.log(props.developer);
    

    return (

       
        <div className='single-card'>
            <img src={image}alt="" />
            <h2>Name:{namme}</h2>
            <h3>Qualification:{qualification}</h3>
            <h4>Age:{age}</h4>
            <h4>Country:{country}</h4>
            <h4>Sallery :{salary}</h4>
            <button onClick={props.increase}> Hire</button>
            

            
        </div>
    );
};

export default Card;

