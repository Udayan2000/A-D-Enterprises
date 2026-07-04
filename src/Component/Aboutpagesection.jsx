import React from 'react'
import { aanddbanner, aanddsmallbanner, imagefour, bannergridthree, bannersix, imageone, bannerone, bannergridone, bannergridtwo, bannergridfour, bannergridfive } from "../Component/Image"
const Aboutpagesection = () => {

  return (
    <>
      <section className='aboutpage_section_main' >
        <div className='cust-container'>
          <div className='aboutpage_mainheading_box'>
            <h4 className='aboutpage_main-text'> About Us – A & D Enterprises </h4>

          </div>
          <p className='aboutpage_main-para'>
            At A & D Enterprises, we are dedicated to delivering high-quality, creative, and result-driven design and printing solutions that empower brands to stand out. With a commitment to excellence and innovation, we specialize in crafting impactful visual communication materials — from banners, brochures, and hoardings to ID cards and product labels — designed to elevate your brand presence and drive meaningful engagement.
          </p>

          <div className='aboutpage_grid_lefttoright'>
            <div className='left_to_right_grid'>

              <div className='left_to_right_content'>
                <div className='leftcontentmain'>
                  <img src={imagefour} alt='...' />
                </div>
              </div>

              <div className='left_to_right_content'>

                <div className='leftcontentmain'>
                  <h4 className='fist_about_leftcontentmain_heading'>
                    Turning Vision into Impact
                  </h4>
                  <p className='fist_about_leftcontentmain_para'>

                    At A & D Enterprises, we believe every brand has a story worth telling — and we bring that story to life through <span> powerful design and print solutions. </span> From <span> banners, flex, and festoons to ID cards, brochures, and social media creatives, </span> we deliver visually compelling designs that help your business <span> stand out, connect, and grow. </span>

                    Our passion lies in creating designs that do more than just look good — they <span> communicate, inspire, and convert. </span> Whether you’re building a new identity or strengthening your existing one, we craft every detail with precision, creativity, and strategy.
                  </p>
                </div>

                <div className='left_to_right_subgrid'>
                  <div className='left_to_right_subgrid_left'>
                    <div className='left_to_right_subgrid_img'>
                      <img src={aanddsmallbanner} alt='...' />
                    </div>
                  </div>
                  <div className='left_to_right_subgrid_left'>
                    <div className='left_to_right_subgrid_content'>
                      <h4 className='left_to_right_subgrid_content_para'>Our Mission</h4>
                      <p className='left_to_right_subgrid_content_subpara'>Our mission is simple — to empower businesses with impactful design and printing solutions that drive recognition, trust, and measurable growth.
                        We aim to transform ideas into meaningful visuals that reflect your brand’s purpose and make a lasting impression in today’s fast-moving market.</p>
                    </div>
                  </div>
                </div>

                <div className='left_to_right_subgrid'>
                  <div className='left_to_right_subgrid_left'>
                    <div className='left_to_right_subgrid_img'>
                      <img src={aanddsmallbanner} alt='...' />
                    </div>
                  </div>
                  <div className='left_to_right_subgrid_left'>
                    <div className='left_to_right_subgrid_content'>
                      <h4 className='left_to_right_subgrid_content_para'>Our Vision</h4>
                      <p className='left_to_right_subgrid_content_subpara'>
                        We aspire to be your most trusted creative partner, known for innovation, reliability, and excellence in design and printing.
                        Our vision is to inspire and transform brands through creativity that not only attracts attention but also builds relationships and fuels long-term success.
                      </p>
                    </div>
                  </div>
                </div>


              </div>

            </div>






          </div>

          <div className='aboutpage_second_grid'>
            <div className='aboutpage_second-grid_left'>
              <div className='aboutpage_second-grid_wrap'>
                <h4 className='aboutpage_second-grid_heading'>Why Choose A & D Enterprises</h4>
                <ul className='aboutpage_second-grid_ul'>
                  <li className='aboutpage_second-grid_li'>
                    <span>
                      Creative Excellence:
                    </span>
                    Every design is crafted to communicate your brand’s uniqueness.
                  </li>

                  <li className='aboutpage_second-grid_li'>
                    <span>
                      Quality Commitment:
                    </span>
                    We deliver top-tier materials and printing that make an impact.
                  </li>

                  <li className='aboutpage_second-grid_li'>
                    <span>
                      Affordable Innovation:
                    </span>
                    Premium quality that fits your business goals and budget.
                  </li>

                  <li className='aboutpage_second-grid_li'>
                    <span>
                      Client-Centric Approach:
                    </span>
                    We listen, collaborate, and ensure satisfaction at every step.
                  </li>

                </ul>
              </div>
            </div>
            <div className='aboutpage_second-grid_middle'></div>
            <div className='aboutpage_second-grid_right'>
              <div className='aboutpage_second-grid_wrap'>
                <h4 className='aboutpage_second-grid_heading'>Our Promise</h4>
                <p className='aboutpage_second-grid_para'>
                  At A & D Enterprises, we don’t just design — we build your brand’s visual legacy.
                  With every project, our goal is to create something that’s not only seen but remembered. Because in today’s competitive market, design isn’t just decoration — it’s your voice, your presence, and your growth.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Aboutpagesection
