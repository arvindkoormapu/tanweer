import React from "react";
import { Layout, Row, Col, Typography, Space, Tooltip } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import MissionSlider from "../../components/Slider/AboutSlider";
import PatternIcon from "../../images/Pattern_Icon.png";
import ArrowLeft from "../../images/About/arrowL.webp";
import ArrowRight from "../../images/About/arrowR.webp";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./about.css";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

function About() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  let swiperInstance = null;

  const onSwiper = (swiper) => {
    swiperInstance = swiper; // Store the Swiper instance
  };

  const goToPrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <Layout className="about">
      <Content>
        <div className="main-layout">
          <Row className="intro">
            {isMobile && (
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  className="image1"
                  rel="preload"
                  src={require(`../../${pages.about.intro.image}`)}
                  alt="Rotating Circle"
                />
              </Col>
            )}
            <Col
              span={isMobile ? 24 : 14}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: isMobile ? "auto" : "100%",
              }}
            >
              <Text className="text">{pages.about.intro.text}</Text>
              <Text className="caption">{pages.about.intro.caption}</Text>
            </Col>
            {!isMobile && (
              <Col
                span={10}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  className="image1"
                  rel="preload"
                  src={require(`../../${pages.about.intro.image}`)}
                  alt="Rotating Circle"
                />
              </Col>
            )}
          </Row>
        </div>

        <div className="mission-section">
          <Row className="top-section">
            <Col span={isMobile ? 24 : 14} className="first-row">
              <Text className="h1">
                {pages.about.mission_section.first_title}
              </Text>
              <Paragraph className="para">
                {pages.about.mission_section.first_deccription1}
              </Paragraph>
              <Paragraph className="para">
                {pages.about.mission_section.first_deccription2}
              </Paragraph>
              {isMobile && (
                <img
                  style={{ paddingTop: "20px" }}
                  className="mission-image"
                  rel="preload"
                  src={require(`../../${pages.about.mission_section.image}`)}
                  alt="Rotating Circle"
                />
              )}
              <div className="second-row">
                <Text className="h1">
                  {pages.about.mission_section.second_title}
                </Text>
                <Paragraph className="para">
                  {pages.about.mission_section.second_deccription}
                </Paragraph>
              </div>
            </Col>
            {!isMobile && (
              <Col span={isMobile ? 24 : 10}>
                <img
                  className="mission-image"
                  rel="preload"
                  src={require(`../../${pages.about.mission_section.image}`)}
                  alt="Rotating Circle"
                />
              </Col>
            )}
          </Row>
          {!isMobile ? (
            <Row>
              {pages.about.mission_section1.map((elm) => (
                <Col span={8}>
                  <div>
                    <img
                      className="mission-images"
                      rel="preload"
                      src={require(`../../${elm.image}`)}
                      alt="Rotating Circle"
                    />
                    <div className="text-content">
                      <Text className="h1">{elm.title}</Text>
                      <Paragraph className="para">{elm.description}</Paragraph>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <MissionSlider pages={pages} />
          )}
        </div>

        <div className="top-header">
          <Space className="space">
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">{pages.header.top_section.text}</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">ACTIVITIES</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            {!isMobile && (
              <>
                <Text className="text">{pages.header.top_section.text}</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
                <Text className="text">ACTIVITIES</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
              </>
            )}
          </Space>
        </div>

        <div className="sustainable-section">
          <Row className="first-row">
            <Col span={isMobile ? 24 : 14}>
              <Text className="h1">{pages.about.sustainable.title}</Text>
              <Paragraph className="para">
                {pages.about.sustainable.description}
              </Paragraph>
            </Col>
            <Col span={isMobile ? 24 : 10} className="arrows">
              <img
                src={ArrowLeft}
                alt="image1"
                onClick={goToPrevious}
                style={{
                  height: "18px",
                  paddingRight: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={ArrowRight}
                alt="image1"
                onClick={goToNext}
                style={{ height: "18px", cursor: "pointer" }}
              />
            </Col>
          </Row>

          <Swiper
            onSwiper={onSwiper}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 1.5}
            grabCursor={true}
            style={{
              width: isMobile ? "85%" : "100%",
              marginLeft: isMobile ? "7.5%" : "5%",
              marginRight: isMobile ? "7.5%" : "5%",
              paddingTop: isMobile ? "30px" : "60px",
            }}
            modules={[Navigation]}
          >
            {pages.about.sustainable.slider.map((elm, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bottom-slider"
                  style={{ display: !isMobile && "flex" }}
                >
                  <div style={{ width: isMobile ? "100%" : "50%" }}>
                    <img
                      src={require(`../../${elm.image}`)}
                      alt={elm.title}
                      style={{ width: "100%", borderRadius: "20px" }}
                    />
                  </div>
                  <div
                    style={{ width: isMobile ? "100%" : "50%" }}
                    className="text-wrapper"
                  >
                    <Tooltip title={elm.title}>
                      <div className="title">{elm.title}</div>
                    </Tooltip>

                    <Tooltip title={elm.description}>
                      <div className="para collapsed">{elm.description}</div>
                    </Tooltip>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Row className="last-row">
            <Col span={isMobile ? 24 : 14}>
              <Paragraph className="para">
                {pages.about.sustainable.description2}
              </Paragraph>
            </Col>
            <Col span={10}></Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default About;
