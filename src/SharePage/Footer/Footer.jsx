import React from 'react';
import './Footer.css'
import footerImg from '../../assets/logo.png'
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className='mainFooter'>
                <div className='borderBottom'>
                    <div id='mainContentId' className='footerContainer'>
                        <div>
                            <div>
                                <img className='footerImg' src={footerImg} alt="" />
                                <p className='text-white pt-2 h5'>Track period to know your <br /> <span className='chondoColor'>rythm</span>.</p>
                            </div>
                            <div className='d-flex gap-2 pt-2'>
                                <div className='footerIcon'>
                                    <span className='Ficon'><BiLogoFacebookSquare /></span>
                                </div>
                                <div className='footerIcon'>
                                    <span className='Ficon'><BiLogoInstagram /></span>
                                </div>
                                <div className='footerIcon'>
                                    <span className='Ficon'><BiLogoYoutube /></span>
                                </div>
                                <div className='footerIcon'>
                                    <span className='Ficon'><BiLogoLinkedinSquare /></span>
                                </div>
                                <div className='footerIcon'>
                                    <span className='Ficon'><BiLogoTwitter /></span>
                                </div>
                            </div>
                        </div>
                        |
                        <div className='importantLinkContainer'>
                            <h3 className='chondoColor'>IMPORTANT</h3>
                            <div className='importantLink'>
                                <Link to='/'>Home</Link>
                                <Link to='/features'>Features</Link>
                                <Link to='/chondopedia'>Chondopedia</Link>
                                <Link to='/shop'>Shop</Link>
                                <Link to='/blogs'>Blogs</Link>
                                <Link to='/resources'>Resources</Link>
                            </div>
                        </div>
                        <div  className='importantLinkContainer'>
                            <h3 className='chondoColor'>CHONDOPEDIA</h3>
                            <div className='importantLink'>
                                <Link to='/blogs'>Blogs</Link>
                                <Link to='/video'>Video</Link>
                                <Link to='/faq'>FAQ</Link>
                            </div>
                        </div>
                        <div  className='importantLinkContainer'>
                            <h3 className='chondoColor'>PRIVACY</h3>
                            <div className='importantLink'>
                                <Link to='/blogs'>Privacy Policy</Link>
                                <Link to='/video'>Terms and Conditions</Link>
                                <Link to='/faq'>Cookies Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='mainContentId' className='footerNav'>
                    <h6 className='footerNavRight'>© Chondo 2022. All rights reserved</h6>
                    <h6 className='footNavHeading'>Terms & Conditions   <span className='ps-2'>Privacy</span></h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;