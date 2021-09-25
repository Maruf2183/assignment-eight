import './Main.css'

import React from 'react';
import Cards from './Cards/Cards';
import Cost from './Cost/Cost';

const Main = () => {
    return (
        <main className='body'>
            <Cards/>
            <Cost/>
        </main>


          

    );
};

export default Main;