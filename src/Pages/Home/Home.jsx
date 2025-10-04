import React from 'react'
import HomeBanner from '../../Component/HomeBanner'
import "../Home/Home.css";
import HomeAbout from '../../Component/HomeAbout';
import HomeServices from '../../Component/HomeServices';
import Homewhychooseus from '../../Component/Homewhychooseus';
import Homeportfolio from '../../Component/Homeportfolio';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices/>
      <Homewhychooseus/>
      <Homeportfolio/>
    </>
  )
}

export default Home
