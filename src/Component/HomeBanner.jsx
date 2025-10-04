import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
// import "../Pages/Home/Home.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { aanddbanner, imagefour, bannergridthree, imageone, bannerone, bannergridone, bannergridtwo, bannergridfour, bannergridfive } from "../Component/Image"
const HomeBanner = () => {
    return (
        <>
            <div className="homepage_banner">


                <section className='homebanner__main__container'>
                    <div className='homebanner__main__bg'>
                        <div className='banner__up__circle'></div>
                        <div className='banner__down__circle'></div>

                        <div className='social-icon-main'>
                            <ul className="social-icon-div-ul">
                                <li className="social-icon-div-li">
                                    <Link to="" className="social-icon-div-li-a">
                                        <i className="fa-brands fa-linkedin" />
                                    </Link>
                                </li>
                                <li className="social-icon-div-li">
                                    <Link to="" className="social-icon-div-li-a">
                                        <i className="fa-brands fa-youtube" />
                                    </Link>
                                </li>
                                <li className="social-icon-div-li">
                                    <Link to="https://www.facebook.com/profile.php?id=61580440992285" className="social-icon-div-li-a">
                                        <i className="fa-brands fa-facebook" />
                                    </Link>
                                </li>
                                <li className="social-icon-div-li">
                                    <Link to="" className="social-icon-div-li-a">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='banner-top-content'>
                            <h2 className='banner-content-heading'>A & D Enterprises</h2>
                            <p className="banner-content-subtitle">
                                we craft impactful design and printing solutions : <span>Banners, Flex, Festoons, ID cards, Social Media Post and  more , </span> that bring your brand’s vision to life and help it grow.”
                            </p>

                        </div>

                        <div className='homebanner_actual_content_grid'>
                            <div className='actual_content_grid_left'>
                                <div className="homebanner_content_left_div">
                                    <p className='homebanner_content_left_text'>At<span> A & D Enterprises,</span>  we provide complete graphic design solutions that bring your brand to life and help your business grow. From logos and branding to promotional designs and digital creatives, our designs are made to connect with people and create impact. We craft visuals that not only look great but also expand your reach, engage your audience, and drive real business growth. Let A & D Enterprises design the creative edge your brand needs to stand out and succeed.</p>
                                </div>
                                <div className='homebanner_content_left_img_grid'>
                                    <div className='homebanner_content_left_img'>
                                        <div className='homebanner_content_left_img-main'>
                                            <img src={aanddbanner}  alt='...' />
                                        </div>
                                    </div>
                                    <div className='homebanner_content_left_img'>
                                        <div className='homebanner_content_left_img-main'>
                                            <img src={imagefour} alt='...' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='actual_content_grid_right'>
                                <div className="home_banner_bentogrid">
                                    <div className='home_banner_bento'>
                                        <img src={bannergridthree} alt='...' />
                                    </div>
                                    <div className='home_banner_bento'>
                                        <img src={bannerone} alt='...' />
                                    </div>
                                    <div className='home_banner_bento'>
                                        <img src={imageone} alt='...' />
                                    </div>
                                    <div className='home_banner_bento'>
                                        <img src={bannergridone} alt='...' />
                                    </div>
                                    <div className='home_banner_bento'>
                                        <img src={bannergridfive} alt='...' />
                                    </div>
                                    <div className='home_banner_bento'>
                                        <img src={bannergridtwo} alt='...' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>




            </div>
            <div className='homepage-banner-res'>
                <div className='homepage-banner-res-container'>
                    <div className='homepage-banner-res_bg'>
                        <div className='cust-container'>
                            <div className=''>
                                <h2 className='banner-rescontent-heading'>A & D Enterprises</h2>
                                <p className='homebanner_rescontent_left_text'>     we craft impactful design and printing solutions : <span>Banners, Flex, Festoons, ID cards, Social Media Post, Posters & Flyers, Brochures & Catalogs,  Hoardings & Festoons,  Logo Design and  more , </span> that bring your brand’s vision to life and help it grow.”</p>
                            </div>
                            <div className='homepage_banner_grid'>
                                <div className='homepage_banner_grid-left'>
                                    <div className='homepagebanner_image_resmain'>
                                        <img src={imageone} alt='...' />
                                    </div>
                                </div>
                                <div className='homepage_banner_grid-right'>
                                    <div className='homepagebanner_image_resmain'>
                                        <img src={imagefour} alt='...' />
                                    </div>
                                </div>
                            </div>
                            <div className='social-icon-main'>
                                <ul className="social-resicon-div-ul">
                                    <li className="social-icon-resdiv-li">
                                        <Link to="" className="social-icon-div-li-a">
                                            <i className="fa-brands fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li className="social-icon-resdiv-li">
                                        <Link to="" className="social-icon-div-li-a">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </li>
                                    <li className="social-icon-resdiv-li">
                                        <Link to="https://www.facebook.com/profile.php?id=61580440992285" className="social-icon-div-li-a">
                                            <i className="fa-brands fa-facebook" />
                                        </Link>
                                    </li>
                                    <li className="social-icon-resdiv-li">
                                        <Link to="" className="social-icon-div-li-a">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeBanner
