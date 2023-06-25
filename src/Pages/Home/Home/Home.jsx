import React from 'react';
import Banner from '../Banner/Banner';
import TrackingBanner from '../TrackingBanner/TrackingBanner';
import CeoSliper from '../CEOSliper/CeoSliper';

const Home = () => {
    return (
        <header>
            <div>
                <Banner />
                <TrackingBanner/>
                <CeoSliper/>
            </div>
        </header>
    );
};

export default Home;