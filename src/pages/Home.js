import React, { useState, useEffect } from 'react';
import '../Styling/Home.css';
import HomeHeroBox from '../components/HomeHeroBox.js';
import Sidebar from '../components/Sidebar.js';

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('Scroll', handleScroll);
    }, []);

    return (
        <div className='home'>
            <Sidebar />
            
            {/* <div style={{ transform: `translateY(${offsetY * 0.5}px)` }}> */}
            <div className='home_hero_wrapper'>
                <h1 className='home_Hero_heading'>CO. NAME</h1>
                <p>TRAVEL MORE</p>
                <p className='home_hero_button'>GET STARTED</p>

                <div className='home_heroBox_container'>
                    <HomeHeroBox
                    image='/Icons/Logo1.png'
                    heading='WHERE ARE YOU TRAVELING?'
                    subHeading='Need help choosing? we can help with that. Explore'
                    />

                    <HomeHeroBox
                    image='/Icons/Logo2.png'
                    heading='SELECT YOUR ACTIVITIES'
                    subHeading='Dont know? we got you covered. Activities'
                    />

                    <HomeHeroBox
                    image='/Icons/Logo3.png'
                    heading='RECEIVE ITINERARY & START EXPLORING'
                    />
                </div>

                <span className='home_hero_social'>
                    <img
                    src='/Icons/FbIcon.png'
                    alt='' />
                     <img
                    src='/Icons/IgIcon.png'
                    alt='' />
                </span>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;
