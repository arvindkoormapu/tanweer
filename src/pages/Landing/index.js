import React, { useState } from "react";
import { Layout, Space, Typography, Row, Col, Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import LandingPageImage from "../../images/Home/landing_page_image.webp";
import LandingPageImageMobile from "../../images/Home/landing_page_image_mobile.webp";
import Path from "../../images/Path 356.png";
import LandingFirst from "../../images/Home/landing-first.png";
import CloseButton from "../../images/Close Button.png";
import { useData } from "../../hooks/useData";
import ButtonComponent from "../../components/Button";
import "../Home/home.css";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { pages } = useData();

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
                <Text className="title">{pages.home.landing.title}</Text>
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
            <Text className="date">{pages.home.landing.date}</Text>
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
        
      </Content>
    </Layout>
  );
};

export default Home;
