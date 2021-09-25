import './Costs.css'
import React from 'react';

const Cost = (props) => {
    return (
        <div className='cost'> 
            <h1>Totat Developers{props.amount}</h1>
            <p>Total cost 50{props.dollars}$</p>
        </div>
    );
};

export default Cost;