import React from 'react'
import { Link } from 'react-router-dom'
import { image ,landBanInPic ,landBanInImg } from "../Component/Image"
const Innerpagebanner = ({ text, para ,pagename}) => {
   return (
      <>
         <section className='innerpage_banner_main'>
            <div className='homebanner__main__container'>
               <div className='innerpage_banner-bg'>
                  <div className='innerpage_banner-bg_up_dot'></div>
                  <div className='innerpage_banner-bg_down_dot'></div>
                  <div className='shape-inneranother-dots'></div>
                  <div className='shape-innerother-dots'></div>
                  <div class="bg-xn">
                     <img src={landBanInImg}  alt="..." />
                  </div>


                     <div class="bgsyu-xn">
                     <img src={image}  alt="..." />
                  </div>

                   <div class="bgs-xn">
                     <img src={image}  alt="..." />
                  </div>

                  
                   <div class="bgsas-xn">
                     <img src={image}  alt="..." />
                  </div>
                  <div className='innerpage_banner-wrapper_main'>
                     <div className="innerpage_banner-contentwrap">
                        <h4 className='innerpage_banner-content-text'>{text}</h4>
                        <p className='innerpage_banner-content-para'>{para}</p>
                     </div>
                     <div className='bredcumb-text-wrap'>
                        <p className='bredcumb-text'>{pagename}  </p>
                        <span className='bredcumb-text-dot'> </span>
                        <Link to="/" className='bredcumb-text-link' >  Home </Link>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   )
}

export default Innerpagebanner
