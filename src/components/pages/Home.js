import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            {/* <Footer /> */}
        </>
    );
}

export default Home;
