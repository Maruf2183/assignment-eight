import './Cards.css'
import React from 'react';
import Card from './Card/Card';

const Cards = (props) => {
     const increase=props.increase
    const developerData = props.developerData;
    
    
    return (
        <div className='cards'>
            {
                developerData.map(developer => {
                    console.log(developer);
                    return <Card increase={increase} developer={developer}/>
                })
          }

        

            
        </div>
    );
};

export default Cards;