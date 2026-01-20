import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomeTop/Hometop.scss"
import Slider1 from '../HomeTop/slider1.jpg'
import Slider2 from '../HomeTop/slider2.jpg'
import Slider3 from '../HomeTop/slider3.jpg'
import Slider4 from '../HomeTop/slider4.jpg'
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
         Slider1,
         Slider2,
         Slider3,
         Slider4,
      ];
      
  

  return (
    <div className='Hometop'>
    <div className="container">
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index}`} style={{ width: "100%", height: "600px" , objectFit: "cover",
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
