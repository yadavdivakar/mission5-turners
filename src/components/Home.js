import React from 'react';
import Hero from './home/Hero';
import Carousel from './home/Carousel';
import Cards from './home/Cards';
import ButtonWindow from './home/ButtonWindow';
import EnquireSignUp from './home/EnquireSignUp';

function Home() {
    return(
        <>
        <Hero />
        <Carousel />
        <Cards />
        <ButtonWindow />
        <EnquireSignUp />
        </>
    );
}

export default Home;