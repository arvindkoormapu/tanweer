import React, { useState, useEffect } from "react";
import { useData } from "../../../hooks/useData";
import ArrowLeft from "../../../images/Home/program/arrow_left.webp";
import ArrowRight from "../../../images/Home/program/arrow_right.webp";
import ArrowLeftMobile from "../../../images/Home/program/arrow_left_mobile.png";
import ArrowRightMobile from "../../../images/Home/program/arrow_right_mobile.webp";
import ButtonComponent from "../../../components/Button";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import "./program.css";
const { Text } = Typography;

function Program() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const slides = pages.home.program;

  useEffect(() => {
    // Preload all images and store them in the state
    const images = slides.map((slide) => {
      const img = new Image();
      img.src = require(`../../../${slide.image}`);
      return img;
    });
    setPreloadedImages(images);
  }, [slides]);

  // Function to handle Next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to handle Previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to get the visible slides
  const getVisibleSlides = () => {
    return [
      slides[(currentIndex - 1 + slides.length) % slides.length], // Previous slide
      slides[currentIndex], // Current slide
      slides[(currentIndex + 1) % slides.length], // Next slide
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <>
      <Text className="title">Tanweer Program</Text>

      <div
        style={{
          textAlign: "center",
          position: "relative",
          width: "100%",
          marginTop: "40px",
          marginBottom: "40px",
          overflow: isMobile && "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: isMobile && "center",
            position: isMobile && "relative",
            width: isMobile ? "100%" : "72%",
            margin: "0 auto",
            padding: !isMobile && "20px",
          }}
        >
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className="slide-wrapper"
              style={{
                flex: isMobile ? (index === 1 ? "0 0 181px" : "0 0 181px") : "",
                backgroundImage: isMobile
                  ? `url(${
                      preloadedImages[
                        (currentIndex - 1 + index + slides.length) %
                          slides.length
                      ]?.src
                    })`
                  : `url(${
                      preloadedImages[(currentIndex + index) % slides.length]
                        ?.src
                    })`,
                zIndex: isMobile && index === 1 ? 1 : 0,
              }}
            >
              <div className="text-wrapper-program">
                <Text className="slider-title">{slide.title}</Text>
                <Text className="slider-date">{slide.time}</Text>
                <Text className="slider-location">{slide.location}</Text>
              </div>
            </div>
          ))}
        </div>

        <img
          src={isMobile ? ArrowLeftMobile : ArrowLeft}
          alt="icon"
          onClick={handlePrevious}
          className="arrow-left"
        />
        <img
          src={isMobile ? ArrowRightMobile : ArrowRight}
          alt="icon"
          onClick={handleNext}
          className="arrow-right"
        />
      </div>
      
      <ButtonComponent
        bgColor="#731D14"
        textColor="#FFF5D9"
        clickAction={() => navigate('/view-program')}
        text="VIEW PROGRAM"
      />
    </>
  );
}

export default Program;
