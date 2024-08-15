import React, { useState } from "react";
import { Layout, Space, Typography, Row, Col, Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import LandingPageImage from "../../images/Home/landing_page_image.webp";
import Path from "../../images/Path 356.png";
import LandingFirst from "../../images/Home/landing-first.png";
import CloseButton from "../../images/Close Button.png";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [subscribePopup, setSubscribePopup] = useState(false);

  const enableSubscribePopup = () => {
    setSubscribePopup(!subscribePopup);
  };

  return (
    <Layout className="landing">
      <Header />
      <Content>
        <div className="landing-banner">
          <div className="image-container">
            <img src={LandingPageImage} alt="icon" className="image" />
          </div>
          <div className="content">
            {!subscribePopup ? (
              <>
                <Text className="title">your journey Begins here</Text>
                <Text className="button" onClick={enableSubscribePopup}>
                  Register your interest
                </Text>
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
            <Text className="date">22, 23, 24 NOVEMBER, 2024</Text>
            <Text className="caption">MLEIHA - SHARJAH - UAE</Text>
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
                The first-ever <br />
                Tanweer Festival
              </Text>
              <Paragraph className="paragraph">
                Introducing the inaugural Tanweer Festival, a three-day
                celebration that transcends language, culture, and borders.
                Experience a soulful blend of live music, nourishing food, a
                vibrant marketplace, and inspiring art installations. Engage in
                workshops that elevate the soul and partake in on-site
                experiences like stargazing and horse riding, designed to
                harmonize the body, mind, and spirit.
              </Paragraph>
              <Paragraph className="paragraph">
                Sign up for the latest updates on our music performances, art
                installations, workshops, poetry sessions, and more.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;
