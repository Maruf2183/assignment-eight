import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const Card = (props) => {
    const handleAdToCart = props.handleAdToCart;
    const developers = props.developer;
    const {image, namme, qualification, age, country, salary,}=developers
   
    

    return (

       
        <div className='single-card'>
            <img src={image}alt="" />
            <h2>{namme}</h2>
            <h3>{qualification}</h3>
            <h4>Age:{age}</h4>
            <h4>Country:{country}</h4>
            <h4>Sallery :{salary}</h4>
            <button onClick={() => handleAdToCart(developers)}> <FontAwesomeIcon icon={faAngleRight} /> Hire</button>
            

            
        </div>
    );
};

export default Card;

