import React, { useState } from "react";
import { Layout, Space, Typography, Row, Col, Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import LandingPageImage from "../../images/Home/landing_page_image.webp";
import LandingPageImageMobile from "../../images/Home/landing_page_image_mobile.webp";
import PatternIcon from "../../images/Pattern_Icon.png";
import Path from "../../images/Path 356.png";
import LandingFirst from "../../images/Home/landing-first.png";
import CloseButton from "../../images/Close Button.png";
import { useData } from "../../hooks/useData";
import Program from "./Program";
import ButtonComponent from "../../components/Button";
import Image20 from "../../images/Home/Image20.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "./home.css";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { pages } = useData();
  const navigate = useNavigate();

  const [subscribePopup, setSubscribePopup] = useState(false);

  const enableSubscribePopup = () => {
    setSubscribePopup(!subscribePopup);
  };

  return (
    <Layout className="landing">
      <Content>
        <div className="landing-banner">
          <div className="image-container">
            <img
              src={isMobile ? LandingPageImageMobile : LandingPageImage}
              alt="icon"
              className="image"
            />
          </div>
          <div className="content">
            {!subscribePopup ? (
              <>
                <Text className="title" style={{marginTop: isMobile ? '100px' : "0px"}}>{pages.home.landing.title}</Text>
                {/* <div className="button-component-wrapper">
                  <ButtonComponent
                    bgColor="#A2441B"
                    textColor="#FFF5D9"
                    clickAction={enableSubscribePopup}
                    text="Register your interest"
                  />
                </div> */}
              </>
            ) : (
              <div className="subscribe-popup">
                <div className="close-button-container">
                  <img
                    onClick={enableSubscribePopup}
                    src={CloseButton}
                    alt="icon"
                    className="close-button-image"
                  />
                </div>
                <Text className="subscribe-h1">
                  Be the first to know about
                  <br /> tanweer festival
                </Text>
                <Text className="subscribe-paragraph">
                  SUSCRIBE TO RECEIVE OUR LATEST NEWS
                </Text>
                {!isMobile ? (
                  <div className="subscribe-button">
                    <div className="container">
                      <Input
                        className="custom-input"
                        placeholder="Email Address"
                        suffix={
                          <Button className="custom-button" type="primary">
                            Subscribe
                          </Button>
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Input
                      className="custom-input-mobile"
                      placeholder="Email Address"
                    />
                    <Button className="custom-button-mobile" type="primary">
                      Subscribe
                    </Button>
                  </div>
                )}
              </div>
            )}
            <Text className="date" style={{marginTop: isMobile ? '90px' : "0px"}}>{pages.home.landing.date}</Text>
            <Text className="caption">{pages.home.landing.location}</Text>
          </div>
        </div>

        <div className="middle-tabs">
          <Space direction="horizontal" size="middle" className="space">
            <Text className="text">music</Text>
            <img src={Path} alt="icon" className="pattern" />
            <Text className="text">Workshops</Text>
            <img src={Path} alt="icon" className="pattern" />
            <Text className="text">ARt</Text>
          </Space>
        </div>

        <div className="landing-content">
          {/* <div
            className="floating-button"
            onClick={() =>
              window.open("https://tickets.tanweerfestival.com/", "_blank")
            }
          >
            get passes NOW
          </div> */}
          <Row align="middle" justify="center" style={{ width: "90%" }}>
            <Col span={isMobile ? 24 : 12}>
              <img src={LandingFirst} alt="icon" className="image" />
            </Col>
            <Col span={isMobile ? 24 : 12} className="content-row">
              <Text className="title">
                {pages.home.introduction.title
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </Text>
              <Paragraph className="paragraph">
                {pages.home.introduction.paragraph_one}
              </Paragraph>
              <Paragraph className="paragraph">
                {pages.home.introduction.paragraph_two}
              </Paragraph>
            </Col>
          </Row>
        </div>

        <div className="main-layout program-section">
          <Program />
        </div>

        <div className="activities-section">
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
          <div className="content">
            <Row>
              <Col span={isMobile ? 24 : 9}>
                <img
                  className="image"
                  rel="preload"
                  src={Image20}
                  alt="Rotating Circle"
                />
              </Col>
              <Col span={isMobile ? 24 : 15} className="left-content">
                <div className="left-content-text">
                  <Text className="h1">{pages.home.activity.title}</Text>
                  <Paragraph className="para" style={{ marginTop: "1rem" }}>
                    {pages.home.activity.description}
                  </Paragraph>
                  <div className="button-component-wrapper2">
                    <ButtonComponent
                      bgColor="#731D14"
                      textColor="#FFF5D9"
                      clickAction={() =>
                        window.open(
                          "https://tickets.tanweerfestival.com/",
                          "_blank"
                        )
                      }
                      text="Tickets available soon"
                    />
                  </div>
                  <Text className="h1">{pages.home.activity.slider.title}</Text>
                </div>

                <div className="slider">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={isMobile ? 2 : 3.3}
                    centeredSlides={false}
                    grabCursor={true}
                    style={{ width: "100%" }}
                  >
                    {pages.home.activity.slider.data.map((elm, index) => (
                      <SwiperSlide key={index}>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <img
                            className="slider-image"
                            rel="preload"
                            src={require(`../../${elm.image}`)}
                            alt="Rotating Circle"
                          />
                          <Text className="image-title-slide">{elm.title}</Text>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
