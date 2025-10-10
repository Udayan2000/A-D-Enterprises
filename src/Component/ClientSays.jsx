import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import clien1 from "../Assets/Image/client1.png";
import clien2 from "../Assets/Image/client2.png";
import clien3 from "../Assets/Image/client3.png";
import clien4 from "../Assets/Image/client4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
const ClientSays = () => {

    const clientdata = [
        {
            image: clien1,
            name: "Mr. Lorem Ipsum",
            owner: "Chameleon salon",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minimaLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minimaLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minimaLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minimaLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minimaLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "19th June,2023",
        },
        {
            image: clien2,
            name: "Mrs. Lorem Ipsum",
            owner: "Jwellary Shop",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "22th June,2023",
        },

        {
            image: clien3,
            name: "Mrs. Lorem Ipsum",
            owner: "Cafe Resturant",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "24th June,2023",
        },
        {
            image: clien4,
            name: "Mr. Lorem Ipsum",
            owner: "Beauty Garden",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "24th June,2023",
        },
        {
            image: clien1,
            name: "Mr. Lorem Ipsum",
            owner: "Pure salon",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "24th June,2023",
        },
        {
            image: clien2,
            name: "Mr. Lorem Ipsum",
            owner: "Fashionic",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "26th June,2023",
        },
        {
            image: clien1,
            name: "Mrs. Lorem Ipsum",
            owner: "Belle Curls",
            para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ex libero ullam cumque possimus autem reiciendis soluta esse impedit minima",
            date: "28th June,2023",
        },
    ]

 
    return (
        <>
            <section className='clientsays_section' id="client">
                <div className="shape-dots"></div>
                <div className="shape-another-dots"></div>
                <div className='cust-container'>
                    <div className='about__text__main'>
                        <h4 className='about__text'>CLIENT SAYS</h4>
                    </div>

                    {/* <div className='client_says_main_view'>
                        <Slider {...settings}>
                            {clientdata.map((item, index) => {
                                return (

                                    <div className='client_says_main_wrap' key={index}>
                                        <div className='client_says_all_content_grid'>
                                            <div className='client_image'>
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <div className=''>
                                                <p className='client_name'>
                                                    {`${item?.name} owner of ${item?.owner}`} </p>

                                                <p className='clent_says_date'>{item.date}</p>

                                                <div className='client_reviews_start'>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='clientsaysytxtsdesctxtpppdiv'>
                                            <p className='clientsaysytxtsdesctxtppp'>{item.para}</p>
                                        </div>

                                    </div>

                                )
                            })}
                        </Slider>
                    </div> */}

<div className='client_says_main_view'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {clientdata.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='client_says_main_wrap' key={index}>
                                        <div className='client_says_all_content_grid'>
                                            <div className='client_image'>
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <div className=''>
                                                <p className='client_name'>
                                                    {`${item?.name} owner of ${item?.owner}`} </p>

                                                <p className='clent_says_date'>{item.date}</p>

                                                <div className='client_reviews_start'>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='clientsaysytxtsdesctxtpppdiv'>
                                            <p className='clientsaysytxtsdesctxtppp'>{item.para}</p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
</div>

                </div>
            </section>
        </>
    )
}

export default ClientSays
