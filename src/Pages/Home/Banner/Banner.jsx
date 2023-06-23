import React from 'react';
import './Banner.css'
import bannerPhone from '../../../assets/mobile.png'
const Banner = () => {
    return (
        <div>
            <div className='bgImg'>
                <div className='mainBanner d-flex' id='mainContentId' >
                    <div className='bannerTextContainer'>
                        <div>
                            <h1 className='BannerHeading'>Undestand the <span className='chondoColor'>Rhythm</span> <br />
                             of Your <span className='chondoColor'>Body</span></h1>
                            <p className='bannerDescription'>Keep track of your menstrual cycle, mood, and symptoms. <br /> 
                                Get a prediction of your fertility, ovulation, and much more.</p>
                        </div>
                        <div className='pt-4'>
                            <button className='videoBtn'>Watch Video</button>
                            <button className='downloadAppBtn'>Download App</button>
                        </div>
                    </div>
                    <div className='bannerImg'>
                        <img src={bannerPhone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;