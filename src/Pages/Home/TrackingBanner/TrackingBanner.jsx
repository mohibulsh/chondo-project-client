import React from 'react';
import bannerPhone from '../../../assets/mobile.png'
import './TrackingBanner.css'
import appleStorage from '../../../assets/apple.png'
import googleStorage from '../../../assets/google.png'
const TrackingBanner = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='TrackingmainBanner ' id='mainContentId' >
                        <div className='bannerTextContainer'>
                            <div>
                                <h1 className='BannerHeading'>Stop Worrying, <br />Start Tracking</h1>
                                <p className='TrackingDescription h5'>#Bleed_With_Pride</p>
                                <p className=''></p>
                            </div>
                            <div className='pt-4'>
                                <h4 className='pb-4'>Download the App for FREE</h4>
                                <div className='d-flex gap-2'>
                                    <a className='storageLink' href=""><img src={appleStorage} alt="" /></a>
                                    <a className='storageLink' href=""> <img src={googleStorage} alt="" /></a></div>
                            </div>
                        </div>
                        <div className='bannerImg'>
                            <img src={bannerPhone} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackingBanner;