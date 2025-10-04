import React from 'react'
import { imagefour, imageone, design, man, brush_design_one, logo } from "../Component/Image"
import { Link } from 'react-router-dom'
const Homewhychooseus = () => {
  return (
    <>
      <section className='home__chosse_section'>

        <div className="shape-dots"></div>
        <div className="shape-another-dots"></div>
        <div className='cust-container'>
          <div className='about__text__main'>
            <h4 className='about__text'>WHY CHOOSE US</h4>
          </div>

          <div className='homeabout_grid_main'>

            <div className='homeabout__grid_left'>

              <div className="home__first__para_wrap">
                <span className="home__first__para_span">
                  ✨ A &amp; D Enterprises ✨ </span>
                <p className="home__first__para">At A & D Enterprises, we specialize in creating exceptional design and printing solutions for businesses of all sizes. Whether you need a banner, Flex, Festoon, ID card, Socila Media Post or any other creative design and graphic design , we are here to bring your brand’s vision to life.</p>
              </div>

              <div className='home__about_left_divide'>

                <div className='left_divide_img'>
                  <img src={imageone} alt='...' />
                </div>

                <div className='homeabout__left_contentwrap'>
                  <div className='homeabout__left__content'>
                    <p className='homeabout__content_text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi rerum nulla ullam,
                    </p>
                    <p className='homeabout__content_text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi rerum nulla ullam,
                    </p>
                  </div>
                  <div className='homeabout__left_with_imgae'>
                    <p className='homeabout__content_text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi rerum nulla ullam,
                    </p>
                  </div>
                </div>

              </div>

              <div className='homeabout__grid_left_bg'>
                <div className='homeabout_left_bg_left'>
                  <div className='home_about_logo_circle'>
                    <img src={logo} alt='...' />
                  </div>
                </div>
                <div className='homeabout_left_bg_right'>
                  <div className='choose_content_infinte'>
                    <div className='choose_content_infinte_brdr'>
                      <p className='choose_content_text_para'>150 +</p>
                      <p className="choose_content_text_title"> Client Satisfaction</p>
                    </div>
                    <div className='choose_content_infinte_brdr'>
                      <p className='choose_content_text_para'>200 +</p>
                      <p className="choose_content_text_title"> Project Complete </p>
                    </div>
                    <div className='choose_content_infinte_brdr'>
                      <p className='choose_content_text_para'>10 +</p>
                      <p className="choose_content_text_title">Years Expertise</p>
                    </div>
                    <div className='choose_content_infinte_brdr'>
                      <p className='choose_content_text_para'>100%</p>
                      <p className="choose_content_text_title">Quality Assurance</p>
                    </div>
                  </div>
                </div>
              </div>



            </div>

            <div className='homeabout__grid_right'>

              <div className='homeabout__right__grid'>

                <div className='homeabout__grid_custom'>
                  <img src={man} alt='...' />
                </div>

                <div className='homeabout_div_wrap_text'>
                  <h4 className='text_wrap__heading'> ✨ A & D Enterprises ✨ </h4>
                  <p className='text-wrap-about-subtitle'>We combine creativity, quality, and reliability to deliver designs that truly represent your brand. With a focus on innovation and attention to detail, we ensure every project enhances your business identity and helps you stand out in today’s competitive market.</p>
                  <div className='homeabout_div_wrap_text_grid'>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Branding & Advertising – </h4>
                      <p className='homeabouttext_grid_subpara'> Eye-catching banners, posters, and advertising materials designed to maximize visibility, along with unique logo designs that make your brand unforgettable.</p>
                    </div>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Print & Digital Design – </h4>
                      <p className='homeabouttext_grid_subpara'> High-quality, customized designs for flex, festoons, ID cards, and other creative print solutions.</p>
                    </div>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Advertisement Campaigns – </h4>
                      <p className='homeabouttext_grid_subpara'> Engaging and professional social media creatives designed to promote your business and enhance its reach in today’s competitive market.</p>
                    </div>

                  </div>
                </div>



              </div>


              <div className='homeabout__grid_rightbg'>

                <div className='homeabout_rightbg_grid'>
                  <div className='homeabout_rightbg_left'>
                    <h4 className='homeabout_rightbg_left_content'>Why Choose Us?</h4>
                    <p className='homeabout_rightbg_left_para'>Choosing A & D Enterprises means choosing a partner who values your brand as much as you do. We don’t just design—we create meaningful solutions that drive impact and growth. With us, you’ll experience : - </p>
                    <ul className='homeabout_rightbg_left_ul'>
                      <li className='homeabout_rightbg_left_li'>
                        <span>  Creative Excellence – </span> Innovative ideas and modern designs tailored to your business needs.
                      </li>
                      <li className='homeabout_rightbg_left_li'>
                        <span>Reliable Quality – </span> Premium outputs that maintain consistency across all platforms.
                      </li>
                      <li className='homeabout_rightbg_left_li'>
                        <span>Client-Centered Approach –  </span> We listen, understand, and deliver according to your vision.
                      </li>
                      <li className='homeabout_rightbg_left_li'>
                        <span> Long-Term Partnership – </span> More than service providers, we aim to be your trusted growth partner.
                      </li>

                    </ul>
                  </div>
                  <div className='homeabout_rightbg_right'>
                    <div className='homeabout_rightbg_img'>
                      <img src={imagefour} alt='...' />
                    </div>
                  </div>
                </div>
              </div>

             
                  <div className='homeabout_div_wrap_text_grid_res'>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Branding & Advertising – </h4>
                      <p className='homeabouttext_grid_subpara'> Eye-catching banners, posters, and advertising materials designed to maximize visibility, along with unique logo designs that make your brand unforgettable.</p>
                    </div>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Print & Digital Design – </h4>
                      <p className='homeabouttext_grid_subpara'> High-quality, customized designs for flex, festoons, ID cards, and other creative print solutions.</p>
                    </div>
                    <div className='homeabouttext_grid_bg'>
                      <h4 className='homeabouttext_grid_title'> Advertisement Campaigns – </h4>
                      <p className='homeabouttext_grid_subpara'> Engaging and professional social media creatives designed to promote your business and enhance its reach in today’s competitive market.</p>
                    </div>

                  </div>
               


            </div>

          </div>




          <Link to="" className='view__btn'> View More</Link>
        </div>
      </section>
    </>
  )
}

export default Homewhychooseus
