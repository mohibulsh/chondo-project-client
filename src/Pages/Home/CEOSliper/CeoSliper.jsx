import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./CeoSliper.css";
import ceoVector from '../../../assets/Vector.png'

const CeoSliper = () => {
    return (
        <div id="mainContentId" className="sliderMain">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="sliderContainer pb-4">
                        <div className="ceoImg">
                        </div>
                        <div className="ceoBanner">
                            <div className="ceoTextContainer p-4">
                            <div>
                                 <img src={ceoVector} alt="" />
                                <div>
                                    <p className="description pt-2">
                                        Ekhane amader jokhon user hobe tokhon user der authentic feedback dibo, eta onek dorkari,
                                        apatotot deyar kichu paini dekhe ei jaygata evabe fillup kortesi, ar kichu lekhar pacchina
                                        tobe arek line likhte hobe dekhe eta likhlam...
                                    </p>
                                </div>
                                <div className="text-end">
                                    <h5 className="chondoColor">Nusrat Kabir Prova</h5>
                                    <p className="ceoChondo">CEO, Chondo</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderContainer">
                        <div className="ceoImg">
                        </div>
                        <div className="ceoBanner">
                            <div className="ceoTextContainer p-4">
                            <div>
                                 <img src={ceoVector} alt="" />
                                <div>
                                    <p className="description pt-4">
                                        Ekhane amader jokhon user hobe tokhon user der authentic feedback dibo, eta onek dorkari,
                                        apatotot deyar kichu paini dekhe ei jaygata evabe fillup kortesi, ar kichu lekhar pacchina
                                        tobe arek line likhte hobe dekhe eta likhlam...
                                    </p>
                                </div>
                                <div className="text-end">
                                    <h5 className="chondoColor">Nusrat Kabir Prova</h5>
                                    <p className="ceoChondo">CEO, Chondo</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderContainer">
                        <div className="ceoImg">
                        </div>
                        <div className="ceoBanner">
                            <div className="ceoTextContainer p-4">
                            <div>
                                 <img src={ceoVector} alt="" />
                                <div>
                                    <p className="description pt-4">
                                        Ekhane amader jokhon user hobe tokhon user der authentic feedback dibo, eta onek dorkari,
                                        apatotot deyar kichu paini dekhe ei jaygata evabe fillup kortesi, ar kichu lekhar pacchina
                                        tobe arek line likhte hobe dekhe eta likhlam...
                                    </p>
                                </div>
                                <div className="text-end">
                                    <h5 className="chondoColor">Nusrat Kabir Prova</h5>
                                    <p className="ceoChondo">CEO, Chondo</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CeoSliper;