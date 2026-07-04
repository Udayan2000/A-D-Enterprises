import React from 'react'
import { logo } from "../Component/Image"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <section className='footer_section_main'>
        <div className='cust-container'>
          <div className='footer_section_grid'>
            <div className='footer_section_one'>
              <div className='footer_logo_main'>
                <img src={logo} alt='...' />
              </div>
            </div>
            <div className='footer_section_two'>
              <p className='footer_section_heading'>About</p>
              <ul className='footer_section_ul'>
                <li className='footer_section_li'>
                  <a href='#'>HOME</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>ABOUT US</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>SERVICES</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>WHY CHOOSE US</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>OUR PORTFOLIO</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>BLOG</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>CONTACT US</a>
                </li>
              </ul>
            </div>
            <div className='footer_section_three'>
              <p className='footer_section_heading'>Quick Link</p>
              <ul className='footer_section_ul'>
                <li className='footer_section_li'>
                  <a href='#'>PRIVACY POLICY</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>TERMS & CONDITION</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>SECURITY</a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>CANCELLATION & RETURNS</a>
                </li>

              </ul>
            </div>
            <div className='footer_section_four'>
              <p className='footer_section_heading'>Contact</p>
              <ul className='footer_section_ul'>
                <li className='footer_section_li'>
                  <a href='#'>
                    <i class="fa-solid fa-location-dot"></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>
                    <i class="fa-solid fa-phone"></i>
                   +91 98776663112
                  </a>
                </li>
                <li className='footer_section_li'>
                  <a href='#'>
                    <i class="fa-solid fa-envelope"></i>
                   test@gmail.com
                  </a>

                </li>

              </ul>

            </div>
            <div className='footer_section_five'>
              <p className='footer_section_heading'>Social</p>
              <ul className='footer_section_link_ul'>
                <li className='footer_section_link_li'>
                  <Link href=''>
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
                <li className='footer_section_link_li'>
                  <Link href=''>
                    <i class="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li className='footer_section_link_li'>
                  <Link href=''>
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li className='footer_section_link_li'>
                  <Link href=''>
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                {/* <li className='footer_section_link_li'>
                  <a href=''>
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <p class="copy-right_ad">


            Copyright © 2025      <a href="#">A & D ENTERPRISES </a>   All rights reserved



          </p>
        </div>
      </section>
    </>
  )
}

export default Footer
