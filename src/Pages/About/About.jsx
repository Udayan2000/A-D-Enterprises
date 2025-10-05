import React from 'react';
import "../About/About.css"
import Innerpagebanner from '../../Component/Innerpagebanner';
import Aboutpagesection from '../../Component/Aboutpagesection';
const About = () => {
  return (
    <>
      <Innerpagebanner text="A & D ENTERPRISES" para="At A & D Enterprises, we craft impactful designs and premium prints that bring your brand’s vision to life. From banners to brochures and product labels, our creative precision and quality printing ensure your brand stands out with lasting impact." pagename="About Us"/>
      <Aboutpagesection/>
    </>
  )
}

export default About
