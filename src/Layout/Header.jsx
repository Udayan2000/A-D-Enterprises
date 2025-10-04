import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { logo } from '../Component/Image';
const Header = () => {



    return (
        <>
            <section className='top-header'>
                <div className='cust-container'>
                    <div className='top-header-grid'>
                        <div className='top-header-left'>
                            <p className='top-header-left-text'>
                                <span>
                                    A & D Enterprises
                                </span> Makes Brands Shine.
                            </p>
                        </div>
                        <div className='top-header-right'>

                            <div className='top-header-right-grid'>
                                <div className="contact-item-top">
                                    <a
                                        className="contact-link-top"
                                        href="tel:+911234567890"
                                        aria-label="Call A & D Enterprises at +91 8101658121"
                                    >
                                        {/* phone SVG icon */}
                                        <svg
                                            className="icon-link-top"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27 11.36 11.36 0 003.56.57 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27.95l-2.18 2.28z" />
                                        </svg>
                                        <span className="contact-text">+91 8101658121</span>
                                    </a>


                                </div>


                                <div className="contact-item-top">
                                    <a
                                        className="contact-link-top"
                                        href="mailto:info@adenterprises.com"
                                        aria-label="Email A & D Enterprises at info@adenterprises.com"
                                    >
                                        {/* mail SVG icon */}
                                        <svg
                                            className="icon-link-top"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        <span className="contact-text">contactaanddenterprises@gmail.com</span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="header-main">
                <div class="cust-container">
                    <div class="header-main-div-grid">
                        <div class="header-logo">
                            <Link to="" class="header-logo-a">
                                <img src={logo} alt='...' />
                            </Link>
                        </div>
                        <div class="main-header-bg">
                            <div class="header-middle-bg">
                                <ul class="header-middle-bg-ul">
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Home
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        < Link to="/about" class="header-middle-bg-li-a">
                                            About us
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Services
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Why Choose Us
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Our Portfolio
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Blog
                                        </Link>
                                    </li>
                                    <li class="header-middle-bg-li">
                                        <Link to="" class="header-middle-bg-li-a">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="main-header-left">
                            <ul class="main-header-left-ul">

                                <li class="main-header-left-li">
                                    <Link to="" class="main-header-left-li-a">
                                        Special Offer
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='responsive_header_main'>
                <div className='cust-container'>
                    <div className='responsive_header_grid'>
                        <div className='responsive_header_grid_left'>

                            <div className='responsive_header_grid_logo'>
                                <img src={logo} alt='...' />
                            </div>
                        </div>
                        <div className='responsive_header_grid_middle'>
                            <p class="top-resheader-left-text"><span>A &amp; D Enterprises</span> Makes Brands Shine.</p>
                        </div>
                        <div className='responsive_header_grid_right'>
                            <Link to="" className='main-resheader-left-li-a' > Special Offer</Link>
                            <Link to="" className='main-resheader-left-li-a_iocn'>
                                <i class="fa-solid fa-gift"></i>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
            <section className='responsive_headerlink_main'>
                <div className='cust-container'>
                    <div className='responsive_headerlink_wrapper'>
                        <ul className='responsive_headerlink_wrapper_ul'>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-house"></i>
                                </Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-circle-info"></i></Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-toolbox"></i></Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-shield"></i>
                                </Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-layer-group"></i></Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-newspaper"></i>
                                </Link>
                            </li>
                            <li className='responsive_headerlink_wrapper_li'>
                                <Link to="" >
                                    <i class="fa-solid fa-address-card"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header

