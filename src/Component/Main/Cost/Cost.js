import './Costs.css'
import React from 'react';


const Cost = (props) => {
    const carts = props.cart;
    let total = 0;
    let devolopers = '';
    for (const cart of carts) {
        total = total + cart.salary;
        devolopers = devolopers + cart.namme;
    }
    


        return(
        <div className='cost'> 
            <h5>Totat Developers:- {carts.length}</h5>
                <p>Total cost :-{total}$</p><br />

                <h2>Developers:-{devolopers}</h2>
        </div>
    );
};

export default Cost;