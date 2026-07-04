import React from 'react'
import { imagethree, imageone, designanother,imagefive,imagetwoanother,mission_img } from "../Component/Image"
const HomeAbout = () => {


    return (
        <>
            <section className='about-section' id="about">

                <div className="shape-dots"></div>
                <div className="shape-another-dots"></div>
                <div className='cust-container'>
                    <div className='about__text__main'>
                        <h4 className='about__text'>ABOUT US</h4>
                    </div>

                    <div className='home-about-grid'>

                        <div className='home-about-left'>
                            <div className='home__first__para_wrap'>
                                <span className='home__first__para_span'>✨ A & D Enterprises ✨ </span>
                                <p className='home__first__para'>
                                    Impactful designs & prints—turning your brand’s vision into growth.
                                    From Banners, Flex, and Festoons to ID cards and Social media post more, we deliver creative solutions that help your business stand out in today’s competitive market.
                                </p>
                            </div>
                            <div className='home__about__lastgrid'>
                                <div className='lastgrid__left'>
                                    <div className='lastgrid__left__bg'>
                                        <div className='lastgrid__left__bg_img'>
                                            <img src={mission_img} alt='...' />
                                        </div>
                                        <div className='lastgrid__left__content'>
                                            <h4 className='lastgrid__left_content_para'> Our Mission</h4>
                                            <p className='lastgrid__left_content_subpara'>
At A & D Enterprises, our mission is to empower businesses with innovative, high-quality design and printing solutions that transform ideas into impactful visuals. We enhance brand visibility and help your business stand out with creativity and excellence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='lastgrid__right'>
                                    <div className='lastgrid__left__bg'>
                                        <div className='lastgrid__left__bg_img'>
                                            <img src={imagethree} alt='...' />
                                        </div>
                                        <div className='lastgrid__left__content'>
                                            <h4 className='lastgrid__left_content_para'> Our Vission</h4>
                                            <p className='lastgrid__left_content_subpara'>At A & D Enterprises, our vision is to be a trusted creative partner delivering innovative design and printing solutions that inspire and transform brands. We strive to drive lasting growth and recognition through impactful creativity and quality.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='home-about-middle'>
                            <div className="home-about-bento">
                                <div className="bento-item bento-text">


                                    <p>
                                        A & D Enterprises is a trusted and reliable organization dedicated to delivering excellence in design and printing solutions.

                                    </p>
                                    <p>
                                        We deliver top-quality services tailored to meet the diverse needs of every business.
                                    </p>
                                </div>

                                <div className="bento-item bento-image">
                                    <img src={imagefive} alt="Creative project" />
                                </div>

                                <div className="bento-item bento-image">

                                    <img src={designanother} alt="Design showcase" />
                                </div>

                                <div className="bento-item bento-text">
                                    <p>
                                        We focus on providing top-quality services that meet the diverse needs of businesses of all sizes.
                                    </p>
                                    <p>
                                        We combine creativity, precision, and professionalism to turn ideas into impactful designs that elevate your brand identity.
                                    </p>
                                </div>



                                <div className="bento-item bento-image">
                                    <img src={imageone} alt="Artwork" />
                                </div>



                            </div>

                        </div>

                        <div className='home-about-right'>
                            <div className='home-about-left__img'>
                                <img src={imageone} alt='...' />
                            </div>

                            <div className='home-about-left_bg'>
                                <ul className="home-about-left_bg_ul">
                                    <li className="home-about-left_bg_li">
                                        <span> Strategic Branding & Advertising : </span>  Eye-catching designs that maximize visibility.
                                    </li>
                                    <li className="home-about-left_bg_li">
                                        <span> Comprehensive Digital Design Solutions : </span>  Creative designs that define your brand.
                                    </li>
                                    <li className="home-about-left_bg_li">
                                        <span>Targeted Advertisement Campaigns : </span>  Engaging creatives that expand business.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default HomeAbout
