import './Main.css'

import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import Cost from './Cost/Cost';

const Main = () => {

    const [count, setCount] = useState(0)
    const increase = () => {
        const updatedAmount = count + 1;
        setCount(updatedAmount)
    }
    const [Developer, setDeveloper] = useState([]);
    useEffect(() => {
        fetch('./developer.json')
            .then(res => res.json())
            .then( data=> setDeveloper(data))
        
    }, [])
    
    console.log(Developer);


    return (
        <main className='body'>
            <Cards increase={increase} developerData={Developer} />
            <Cost count={count} />
        </main>




    );
};

export default Main;