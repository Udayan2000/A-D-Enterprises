import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <section className='contactus_section' id="contact">
                <div className="shape-dots"></div>
                <div className="shape-another-dots"></div>
                <div className='cust-container'>
                    <div className='about__text__main'>
                        <h4 className='about__text'>CONTACT US</h4>
                    </div>

                    <div className='contactus_grid'>
                        <div className='contactus_grid_left'>
                            <div className='contactus_grid_left_bg'>

                                <div className='conatct_info_box_wrap_left'>
                                    <p className='contact_info_heading'>Contact Info</p>

                                    <div className='contact_info_box_grid'>

                                        <div className='contact_info_box_icon'>
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>

                                        <div className='contact_info_box_content'>
                                            <p className='contact_info_box_content_para'>Address Location</p>
                                            <p className='contact_info_box_content_subpara'>Ramnagar, Tarakeswar, Hooghly, 712411</p>
                                        </div>

                                    </div>

                                    <div className='contact_info_box_grid'>
                                        <div className='contact_info_box_icon'>
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className='contact_info_box_content'>
                                            <p className='contact_info_box_content_para'>Phone Number</p>
                                            <p className='contact_info_box_content_subpara'>8101658121</p>
                                        </div>
                                    </div>

                                    <div className='contact_info_box_grid'>
                                        <div className='contact_info_box_icon'>
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>

                                        <div className='contact_info_box_content'>
                                            <p className='contact_info_box_content_para'>Mail Address</p>
                                            <p className='contact_info_box_content_subpara'>contactaanddenterprises@gmail.com</p>
                                        </div>

                                    </div>
                                </div>


                                <div className='conatct_info_box_wrap_right'>
                                    <p className='contact_info_heading'>Follow Info</p>
                                    <ul className='contact_info_follow_ul'>
                                        <li className='contact_info_follow_li'>
                                            <Link className='contact_info_follow_li-a'>
                                                <i class="fa-brands fa-linkedin"></i>
                                                <p className='contact_info_follow_li_text'>Linked In</p>
                                            </Link>
                                        </li>
                                        <li className='contact_info_follow_li'>
                                            <Link className='contact_info_follow_li-a'>
                                                <i class="fa-brands fa-youtube"></i>
                                                <p className='contact_info_follow_li_text'>YouTube</p>
                                            </Link>
                                        </li>
                                        <li className='contact_info_follow_li'>
                                            <Link className='contact_info_follow_li-a' to="https://www.facebook.com/profile.php?id=61580440992285">
                                                <i class="fa-brands fa-facebook"></i>
                                                <p className='contact_info_follow_li_text'>FaceBook</p>
                                            </Link>
                                        </li>
                                        <li className='contact_info_follow_li'>
                                            <Link className='contact_info_follow_li-a'>
                                                <i class="fa-brands fa-instagram"></i>
                                                <p className='contact_info_follow_li_text'>Instagram</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='contactus_grid_right'>
                            <div className='contactus_grid_right_bg'>
                                <div className='contact_map_wrap_main'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29412.017101007834!2d88.0216324!3d22.857902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718791984009!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" />

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </section>
        </>
    )
}

export default ContactUs
