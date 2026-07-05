import React from 'react'
import HomeBanner from '../../Component/HomeBanner'
import "../Home/Home.css"
import HomeAbout from '../../Component/HomeAbout';
import HomeServices from '../../Component/HomeServices';
import Homewhychooseus from '../../Component/Homewhychooseus';
import Homeportfolio from '../../Component/Homeportfolio';
import ContactUs from '../../Component/ContactUs';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices/>
      <Homewhychooseus/>
      <ContactUs/>
      <Homeportfolio/>
    </>
  )
}

export default Home
