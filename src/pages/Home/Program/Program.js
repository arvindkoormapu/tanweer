// import React, { useState, useEffect } from "react";
// import { useData } from "../../../hooks/useData";
// import ArrowLeft from "../../../images/Home/program/arrow_left.webp";
// import ArrowRight from "../../../images/Home/program/arrow_right.webp";
// import ButtonComponent from "../../../components/Button/Button";
// import { Typography } from "antd";
// import './program.css'
// const { Text } = Typography;

// function Program() {
//   const { pages } = useData();

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [preloadedImages, setPreloadedImages] = useState([]);

//   const slides = pages.home.program;

//   useEffect(() => {
//     // Preload all images and store them in the state
//     const images = slides.map((slide) => {
//       const img = new Image();
//       img.src = require(`../../../${slide.image}`);
//       return img;
//     });
//     setPreloadedImages(images);
//   }, [slides]);

//   // Function to handle Next button click
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   // Function to handle Previous button click
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to get the visible slides
//   const getVisibleSlides = () => {
//     const visibleSlides = [];
//     for (let i = 0; i < 3; i++) {
//       visibleSlides.push(slides[(currentIndex + i) % slides.length]);
//     }
//     return visibleSlides;
//   };

//   const visibleSlides = getVisibleSlides();

//   return (
//     <>
//       <Text className="title">Tanweer Program</Text>
//       <div style={{ textAlign: "center", position: "relative", width: "100%", marginTop: '40px', marginBottom: '40px' }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "72%",
//             margin: "0 auto",
//             padding: "20px",
//           }}
//         >
//           {visibleSlides.map((slide, index) => (
//             <div
//               key={index}
//               style={{
//                 width: "300px",
//                 height: "430px",
//                 backgroundImage: `url(${
//                   preloadedImages[(currentIndex + index) % slides.length]?.src
//                 })`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 position: "relative",
//                 color: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional: for better text visibility
//               }}
//             >
//               <div
//                 style={{
//                   padding: "10px",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 }}
//               >
//                 <h3>{slide.title}</h3>
//                 <p>{slide.time}</p>
//                 <p>{slide.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <img
//           src={ArrowLeft}
//           alt="icon"
//           onClick={handlePrevious}
//           style={{
//             position: "absolute",
//             left: "7%",
//             top: "50%",
//             transform: "translateY(-50%)",
//             height: "40px",
//             width: "30px",
//             cursor: "pointer",
//           }}
//         />
//         <img
//           src={ArrowRight}
//           alt="icon"
//           onClick={handleNext}
//           style={{
//             position: "absolute",
//             right: "7%",
//             top: "50%",
//             transform: "translateY(-50%)",
//             height: "40px",
//             width: "30px",
//             cursor: "pointer",
//           }}
//         />
//       </div>
//       <ButtonComponent
//         bgColor="#731D14"
//         textColor="#FFF5D9"
//         clickAction={""}
//         text="VIEW PROGRAM"
//       />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useData } from "../../../hooks/useData";
import ArrowLeft from "../../../images/Home/program/arrow_left.webp";
import ArrowRight from "../../../images/Home/program/arrow_right.webp";
import ArrowLeftMobile from "../../../images/Home/program/arrow_left_mobile.png";
import ArrowRightMobile from "../../../images/Home/program/arrow_right_mobile.png";
import ButtonComponent from "../../../components/Button/Button";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";

import "./program.css";
const { Text } = Typography;

function Program() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

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
      {isMobile ? (
        <div
          style={{
            textAlign: "center",
            position: "relative",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {visibleSlides.map((slide, index) => (
              <div
                key={index}
                style={{
                  flex: index === 1 ? "0 0 181px" : "0 0 181px", // Center slide takes 80% width, others take 10%
                  height: "260px",
                  backgroundImage: `url(${
                    preloadedImages[
                      (currentIndex - 1 + index + slides.length) % slides.length
                    ]?.src
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  color: "white",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "flex-start",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional: for better text visibility
                  opacity: 1, // Center slide is fully visible, others are semi-transparent
                  zIndex: index === 1 ? 1 : 0, // Center slide is on top
                  margin: "0 40px",
                  transform: index === 1 ? "scale(1)" : "scale(0.9)", // Center slide is larger
                  transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth transition between slides
                }}
              >
                <div
                  style={{
                    padding: "20px 60px 10px 10px",
                    display: 'flex',
                    flexDirection: "column",
                    textAlign: 'left'
                  }}
                >
                  <Text className="slider-title">{slide.title}</Text>
                  <Text className="slider-date">{slide.time}</Text>
                  <Text className="slider-location">{slide.location}</Text>
                </div>
              </div>
            ))}
            <img
              src={ArrowLeftMobile}
              alt="icon"
              onClick={handlePrevious}
              style={{
                position: "absolute",
                left: "15%",
                top: "50%",
                transform: "translateY(-50%)",
                height: "40px",
                width: "30px",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
            <img
              src={ArrowRightMobile}
              alt="icon"
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "15%",
                top: "50%",
                transform: "translateY(-50%)",
                height: "40px",
                width: "30px",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            position: "relative",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "72%",
              margin: "0 auto",
              padding: "20px",
            }}
          >
            {visibleSlides.map((slide, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  height: "430px",
                  backgroundImage: `url(${
                    preloadedImages[(currentIndex + index) % slides.length]?.src
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  color: "white",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "flex-start",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional: for better text visibility
                }}
              >
                <div
                  style={{
                    padding: "20px 103px 20px 40px",
                    display: 'flex',
                    flexDirection: "column",
                    textAlign: 'left'
                  }}
                >
                  <Text className="slider-title">{slide.title}</Text>
                  <Text className="slider-date">{slide.time}</Text>
                  <Text className="slider-location">{slide.location}</Text>
                </div>
              </div>
            ))}
          </div>

          <img
            src={ArrowLeft}
            alt="icon"
            onClick={handlePrevious}
            style={{
              position: "absolute",
              left: "7%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "40px",
              width: "30px",
              cursor: "pointer",
            }}
          />
          <img
            src={ArrowRight}
            alt="icon"
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "7%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "40px",
              width: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      )}
      <ButtonComponent
        bgColor="#731D14"
        textColor="#FFF5D9"
        clickAction={""}
        text="VIEW PROGRAM"
      />
    </>
  );
}

export default Program;
