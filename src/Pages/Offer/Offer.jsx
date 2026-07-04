
import React from 'react'
import "../Offer/Offer.css"
import { a,specialoffer } from "../../Component/Image"
import { Link } from 'react-router-dom';
import ContactUs from '../../Component/ContactUs';

const Offer = () => {
    return (
        <>
            <section className="offer_section_banner">
                <div className="offer_section_container">
                    <div className="offer_section_banner_bg">
                        <div className="banner_bg_dotted">
                            <img src={a} alt="..." />
                        </div>
                        <div className="banner_bg_down_dotted">
                            <img src={a} alt="..." />
                        </div>
                        <div className="banner_heading_main">
                            <h4 className="banner_heading_main_text"> A &amp; D ENTERPRISES</h4>
                            <p className="banner_heading_main_subpara">
                                Get professional designs at unbeatable prices and take your brand to the next level with our festive offers. Grow your business with our expert graphic design team — delivering quality, creativity, and fast, affordable service.
                            </p>
                            <p className="bedcrumb_text">Special Offer <span /><Link to="/" className="bredcumb_link">Home</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_special_offer_section">
                <div className="shape-dots" />
                <div className="shape-another-dots" />
                <div className="cust-container">
                    <div className="about__text__main">
                        <h4 className="about__text">SPECIAL OFFER</h4>
                    </div>
                    <div className=''>
                        <span class="home__first__para_span">✨ A &amp; D Enterprises ✨ </span>
                        <div className='special_offer_grid'>
                            <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Get exclusive deals on all design services this season!</p>
                                <p className='offer_grid_text'>Boost your brand with A & D Enterprises’ creative solutions.</p>
                            </div>
                             <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Special Offer: Professional designs at unbeatable prices!</p>
                                <p className='offer_grid_text'>Grow your business with our expert graphic design team.</p>
                            </div>
                            <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Special Offer: Professional designs at unbeatable prices!</p>
                                <p className='offer_grid_text'>Grow your business with our expert graphic design team.</p>
                            </div>
                            <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Limited Time Offer — Transform your ideas into stunning visuals!</p>
                                <p className='offer_grid_text'>A & D Enterprises delivers creativity that drives results.</p>
                            </div>

                            <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Take your brand to the next level with our festive offers!</p>
                                <p className='offer_grid_text'>Quality designs, fast delivery, and affordable pricing.</p>
                            </div>

                             <div className='special_offer_grid_box'>
                                <p className='offer_grid_text'>Design smarter, save bigger with A & D Enterprises!</p>
                                <p className='offer_grid_text'>Grab our exclusive special offer before it’s gone.</p>
                            </div>
                        </div>
                    </div>
                   <div className='special_offer_img_main'>
                    <div className='special_offer_img'>
                        <img src={specialoffer} alt='...' />
                    </div>
                    </div>
                </div>
            </section>
            <ContactUs/>
        </>


    )
}
export default Offer

