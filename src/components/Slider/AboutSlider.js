import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import ArrowLeft from "../../images/About/Arrow_left.webp";
import ArrowRight from "../../images/About/Arrow_right.webp";
const { Text, Paragraph } = Typography;

const AboutSlider = ({ pages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    pages.about.mission_section1[0]
  );

  useEffect(() => {
    setCurrentSlide(pages.about.mission_section1[currentIndex]);
  }, [currentIndex, pages]);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % pages.about.mission_section1.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex =
      (currentIndex - 1 + pages.about.mission_section1.length) %
      pages.about.mission_section1.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Row>
      <Col span={24} style={{ display: "flex", padding: '0px 10px' }}>
        <img
          src={ArrowLeft}
          alt="image1"
          onClick={goToPrevious}
          style={{ height: "43px", marginTop: '72px' }}
        />
        <div style={{textAlign: 'center'}}>
          <img
            className="mission-images"
            rel="preload"
            src={require(`../../${currentSlide.image}`)}
            alt="Rotating Circle"
          />

          <div className="text-content" style={{width: '100%'}}>
            <Text className="h1">{currentSlide.title}</Text>
            <Paragraph className="para">{currentSlide.description}</Paragraph>
          </div>
        </div>
        <img
          src={ArrowRight}
          alt="image1"
          onClick={goToNext}
          style={{ height: "43px", marginTop: '72px' }}
        />
      </Col>
    </Row>
  );
};

export default AboutSlider;
