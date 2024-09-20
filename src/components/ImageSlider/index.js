import React, { useState } from 'react';
import { Typography } from "antd";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; 
const { Text } = Typography;

const ImageSlider = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={require(`../../${slide.image}`)} alt={`Slide ${index + 1}`} className="slide-image"  style={{background: '#000'}}/>
          <div className="slide-content">
            <Text className='name'>{slide.name}</Text>
            {/* <Text className='date'>{slide.date}</Text> */}
          </div>
        </div>
      ))}
    </Slider>
    <div className="slider-progress">
      <div
        className="slider-progress-bar"
        style={{ left: `${currentSlide * 33.33}%` }}
      />
    </div>
  </div>
  );
};

export default ImageSlider;
