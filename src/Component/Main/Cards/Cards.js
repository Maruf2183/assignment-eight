import './Cards.css'
import React from 'react';
import Card from './Card/Card';

const Cards = (props) => {
    const handleAdToCart = props.handleAdToCart;
    const developerData = props.developerData;
    
    
    return (
        <div className='cards'>
            {
                developerData.map(developer => {
                    return <Card
                        
                        key={developer.id}
                        developer={developer}
                        handleAdToCart={handleAdToCart}
                    >
                    
                </Card>
                 
                })
          }

        

            
        </div>
    );
};

export default Cards;