import './Main.css'

import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import Cost from './Cost/Cost';

const Main = () => {

    const [developer, setDeveloper] = useState([]);
    useEffect(() => {
        fetch('./developer.json')
            .then(res => res.json())
            .then(data => setDeveloper(data))

    }, [])

    const [cart,setCart]=useState([])


    const handleAdToCart = (product) => {
        console.log(product.namme);
        
        const newCart = [...cart, product]
        setCart(newCart)

        console.log(developer);

    }
    return (
        <main className='body'>
            <Cards handleAdToCart={handleAdToCart} developerData={developer} />
            <Cost cart={cart} />
        </main>




    );
};

export default Main;