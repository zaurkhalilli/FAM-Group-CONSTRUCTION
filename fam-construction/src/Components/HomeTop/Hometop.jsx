import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../HomeTop/Hometop.scss"
const Hometop = () => {
    const settings = {
        dots: true,           
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true           
      };
      
  const images = [
    "https://famgroupconstruction.az/templates/az/images/slider1.png",
    "https://famgroupconstruction.az/templates/az/images/slider2.png",
    "https://famgroupconstruction.az/templates/az/images/slider3.png",
    "https://famgroupconstruction.az/templates/az/images/slider4.png"
  ];

  return (
    <div className='Hometop'>
    <div className="container">
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index}`} style={{ width: "100%", height: "auto" , objectFit: "cover",
     display: "block",
     margin: "0 auto" }} />
        </div>
      ))}
    </Slider>
    </div>
    </div>
  )
}

export default Hometop
