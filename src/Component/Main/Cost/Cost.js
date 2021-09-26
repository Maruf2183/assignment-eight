import './Costs.css'
import React from 'react';


const Cost = (props) => {
/* 
    const [cost, setCost] = useState(0)
    const newCost = cost + props.cost;
        setCost(newCost) */
    return (
        <div className='cost'> 
            <h5>Totat Developers:- {props.count}</h5>
            <p>Total cost 50 $</p>
        </div>
    );
};

export default Cost;