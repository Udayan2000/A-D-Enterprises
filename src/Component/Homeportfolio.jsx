import React, { useState } from 'react'
import { bannerone, bannerthree, bannertwo, postertwo, posterone, posterthree, 
    posterfive, postersix, posterseven, brochuresone, brochurestwo, brochuresthree, 
    brochuresfour, brochuresfive, brochuressix ,socialmediaone, socialmediatwo,socialmediathree,
socialmediafour,socialmediafive,socialmediasix,logoone,logotwo,logothree,logofour,logofive,
logosix,logoseven,logoeight,logonine,logoten } from "../Component/Image"
import { Link } from 'react-router-dom'
const Homeportfolio = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState("all");

    return (
        <>
            <section className='home__portfolio_section' id="portfolio"> 
                <div className="shape-dots"></div>
                <div className="shape-another-dots"></div>
                <div className='cust-container'>
                    <div className='about__text__main'>
                        <h4 className='about__text'>OUR PORTFOLIO</h4>
                    </div>
                    <div className='home_portfolio_heading_wrap'>
                        <span class="home__first__para_span">✨ A &amp; D Enterprises ✨ </span>
                        <p class="home__first__para">A & D Enterprises – Your one-stop solution for impactful designs and premium printing. From banners to brochures, logos to business cards, we help your brand stand out with creativity, quality, and trust.
                            A & D Enterprises is a leading provider of creative design and printing solutions, committed to helping businesses build a strong and lasting brand presence. With a wide range of services including banners, posters, brochures, catalogs, hoardings, festoons, ID cards, badges, logos, and business cards, we blend innovation with excellence to deliver results that resonate. Our dedication to client satisfaction, attention to detail, and timely project execution have earned us the trust of clients across diverse industries, making us a reliable partner for all corporate and promotional needs.
                        </p>
                    </div>

                    <div className='custom_tabdetail_wrap'>

                        <div className='custom_tabbtn_wrap'>
                            <button className={`custom-tab-btn ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>All</button>
                            <button className={`custom-tab-btn ${activeTab === "banners" ? "active" : ""}`} onClick={() => setActiveTab("banners")}>Banners & Flex</button>
                            <button className={`custom-tab-btn ${activeTab === "posters" ? "active" : ""}`} onClick={() => setActiveTab("posters")}>Posters & Flyers</button>
                            <button className={`custom-tab-btn ${activeTab === "brochures" ? "active" : ""}`} onClick={() => setActiveTab("brochures")}>Brochures & Catalogs</button>
                            <button className={`custom-tab-btn ${activeTab === "hoardings" ? "active" : ""}`} onClick={() => setActiveTab("hoardings")}>Hoardings & Festoons</button>
                            <button className={`custom-tab-btn ${activeTab === "idcards" ? "active" : ""}`} onClick={() => setActiveTab("idcards")}>ID Cards & Badges</button>
                            <button className={`custom-tab-btn ${activeTab === "logo" ? "active" : ""}`} onClick={() => setActiveTab("logo")}>Logo Design</button>
                            <button className={`custom-tab-btn ${activeTab === "presentation" ? "active" : ""}`} onClick={() => setActiveTab("presentation")}>Presentation Templates</button>
                            <button className={`custom-tab-btn ${activeTab === "businesscards" ? "active" : ""}`} onClick={() => setActiveTab("businesscards")}>Business Cards</button>
                            <button className={`custom-tab-btn ${activeTab === "reports" ? "active" : ""}`} onClick={() => setActiveTab("reports")}>Reports & Proposals Layout</button>
                            <button className={`custom-tab-btn ${activeTab === "cardgraphics" ? "active" : ""}`} onClick={() => setActiveTab("cardgraphics")}>Post Card Graphics</button>
                            <button className={`custom-tab-btn ${activeTab === "company" ? "active" : ""}`} onClick={() => setActiveTab("company")}>Company Profiles</button>
                            <button className={`custom-tab-btn ${activeTab === "invitations" ? "active" : ""}`} onClick={() => setActiveTab("invitations")}>Invitations & Certificates</button>
                            <button className={`custom-tab-btn ${activeTab === "eventbackdrops" ? "active" : ""}`} onClick={() => setActiveTab("eventbackdrops")}>Event Backdrops & Standees</button>
                            <button className={`custom-tab-btn ${activeTab === "promotional" ? "active" : ""}`} onClick>{() => setActiveTab("promotional")}Promotional Merchandise Designs</button>
                            <button className={`custom-tab-btn ${activeTab === "product" ? "active" : ""}`} onClick={() => setActiveTab("product")}>Product Labels</button>

                        </div>


                        {activeTab === "all" && (
                            <div className='custom_tabcontent_wrap_all'>

                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={bannerone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={bannerthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={bannertwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={posterthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={brochuressix} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={posterone} alt='...' />
                                    </div>
                                </div>


                                  <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={postertwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={postersix} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={brochuresone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={brochuresfour} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={bannerthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_all'>
                                    <div className='custom_tabcontent_box_img_all'>
                                        <img src={postersix} alt='...' />
                                    </div>
                                </div>


                            </div>
                        )}



                        {activeTab === "banners" && (
                            <div className='custom_tabcontent_wrap_one'>

                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannerone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannerthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannertwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannerone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannerthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_one'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={bannerthree} alt='...' />
                                    </div>
                                </div>


                            </div>
                        )}


                        {activeTab === "posters" && (
                            <div className='custom_tabcontent_wrap_two'>

                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={posterfive} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={postersix} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={posterthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={posterseven} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={posterone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={postertwo} alt='...' />
                                    </div>
                                </div>


                            </div>
                        )}


                        {activeTab === "brochures" && (
                            <div className='custom_tabcontent_wrap_two'>

                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochuresone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochurestwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochuresthree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochuresfour} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochuresfive} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={brochuressix} alt='...' />
                                    </div>
                                </div>


                            </div>
                        )}


                         {activeTab === "cardgraphics" && (
                            <div className='custom_tabcontent_wrap_two'>

                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediaone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediatwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediathree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediafour} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediafive} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={socialmediasix} alt='...' />
                                    </div>
                                </div>


                            </div>
                        )}

                         {activeTab === "logo" && (
                            <div className='custom_tabcontent_wrap_two'>

                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logoone} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logotwo} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logothree} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logofour} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logofive} alt='...' />
                                    </div>
                                </div>
                                <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logosix} alt='...' />
                                    </div>
                                </div>

                                 <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logoseven} alt='...' />
                                    </div>
                                </div>


                                 <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logoeight} alt='...' />
                                    </div>
                                </div>


                                 <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logonine} alt='...' />
                                    </div>
                                </div>

                                 <div className='custom_tabcontent_box_two'>
                                    <div className='custom_tabcontent_box_img'>
                                        <img src={logoten} alt='...' />
                                    </div>
                                </div>

                               


                            </div>
                        )}



                        {/* <Link to="" className='view__btn'>
                            View More
                        </Link> */}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Homeportfolio
