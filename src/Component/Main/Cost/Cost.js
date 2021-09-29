import './Costs.css'
import React from 'react';



const Cost = (props) => {


  const developerName=[]

    const carts = props.cart
    let total = 0;
    for (const cart of carts) {
        total = total + cart.salary;
        developerName.push(cart.namme)
    
   
    }

    return (
        <div className='cost'>
            <h5>Totat Developers:- {carts.length}</h5>
            <p>Total cost :-{total}$</p><br />
            {
                developerName.map(name => {
                    return (
                        <Developer name={name}/>
                    )
                })
            }
            
            
       
        </div>
    );
}

const Developer = props => {
   
    return (
        <h2 className='h2'>{props.name}</h2>

        
    )
}
export default Cost;

 




