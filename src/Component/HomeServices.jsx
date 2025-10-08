import React from 'react'
import { imagethree, imageone, design, } from "../Component/Image"
import { Link } from 'react-router-dom'
const HomeServices = () => {
    return (
        <>
            <section className='about-section' id="service">

                <div className="shape-dots"></div>
                <div className="shape-another-dots"></div>
                <div className='cust-container'>
                    <div className='about__text__main'>
                        <h4 className='about__text'>OUR SERVICES</h4>
                    </div>


                    <div className='our__services__grid__wrapper'>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Banners (Flex, Vinyl, Digital)</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Posters & Flyers</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        Impactful and creative posters & flyers that capture attention, inspire engagement, and elevate your brand — with A & D Enterprises.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'>Brochures & Catalogs</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                       A & D Enterprises creates high-quality, creative, and impactful brochures and catalogs designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Hoardings & Festoons</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                     A & D Enterprises creates high-quality, creative, and impactful hoardings and festoons designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> ID Cards & Badges</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Logo Design</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Presentation Templates</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Business Cards</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Reports & Proposals Layout</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Company Profiles</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Invitations & Certificates</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'> Event Backdrops & Standees</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'>Promotional Merchandise Designs</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='our__services_wrapper_box'>
                            <div className='home-sercvices__bg_box'>
                                <div className='home-sercvices__bg_box_top'>
                                    <div className='home-sercvices_top_img'>
                                        <img src={imagethree} alt='...' />
                                    </div>
                                </div>
                                <div className='home-sercvices__bg_box_middle'>
                                    <p className='home-sercvices__bg-text'>Product Labels</p>
                                </div>
                                <div className='home-sercvices__bg_box_bottom'>

                                    <p className='home-sercvices__bg__subpara'>
                                        A & D Enterprises creates high-quality, creative, and impactful banners designed to effectively showcase your brand and attract attention.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <Link to="" className='view__btn'> View More</Link> */}
                </div>
            </section>
        </>
    )
}

export default HomeServices
