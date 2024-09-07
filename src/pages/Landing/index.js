import React, { useState, useRef } from "react";
import {
  Layout,
  Space,
  Typography,
  Row,
  Col,
  Input,
  Button,
  message,
  Modal,
} from "antd";
import { useMediaQuery } from "react-responsive";
import LandingPageImage from "../../images/Home/landing_page_image.webp";
import LandingPageImageMobile from "../../images/Home/landing_page_image_mobile.webp";
import Path from "../../images/Path 356.png";
import LandingFirst from "../../images/Home/landing-first.png";
import CloseButton from "../../images/Close Button.png";
import { useData } from "../../hooks/useData";
import ButtonComponent from "../../components/Button";
import "../Home/home.css";
import axios from "axios";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
  const inputRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { pages } = useData();

  const [subscribePopup, setSubscribePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const enableSubscribePopup = () => {
    setSubscribePopup(!subscribePopup);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputRef.current) {
      inputRef.current.blur(); // This will dismiss the keyboard on mobile
    }
    try {
      if (!validateEmail(email)) {
        setLoading(false);
        messageApi.open({
          type: "error",
          content: "Please enter a valid email address.",
        });
        return;
      }
      const response = await axios.post(
        "https://connect.mailerlite.com/api/subscribers", // MailerLite API endpoint for adding subscribers
        {
          email: email,
          groups: ["131728999121421845"],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MAILERLITE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setLoading(false);
        messageApi.open({
          type: "success",
          content: "Thank you for subscribing!",
        });
        setEmail("");
        setSubscribePopup(!subscribePopup);
      } else {
        setLoading(false);
        messageApi.open({
          type: "error",
          content: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error subscribing:", error);
      messageApi.open({
        type: "error",
        content: "Error subscribing. Please try again.",
      });
    }
  };

  return (
    <Layout className="landing">
      {contextHolder}
      <Content>
        <div className="landing-banner">
          <div className="image-container">
            <img
              src={isMobile ? LandingPageImageMobile : LandingPageImage}
              alt="icon"
              className="image"
            />
          </div>
          <div className="content" style={{ bottom: !isMobile && "20%" }}>
            <>
              <Text className="title">{pages.home.landing.title}</Text>
              <div className="button-component-wrapper">
                <ButtonComponent
                  bgColor="#A2441B"
                  textColor="#FFF5D9"
                  clickAction={enableSubscribePopup}
                  text="Register your interest"
                />
              </div>
            </>
            <Modal
              open={subscribePopup}
              footer={null}
              closable={false}
              getContainer={false}
              width={isMobile ? "90%" : "50%"}
            >
              <div className="subscribe-popup subscribe-popup-head">
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
                        value={email}
                        onChange={handleEmailChange}
                        suffix={
                          <Button
                            className="custom-button"
                            type="primary"
                            onClick={(e) => handleSubscribe(e)}
                            loading={loading}
                          >
                            Subscribe
                          </Button>
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Input
                      ref={inputRef}
                      className="custom-input-mobile"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <Button
                      className="custom-button-mobile"
                      type="primary"
                      onClick={(e) => handleSubscribe(e)}
                      loading={loading}
                    >
                      Subscribe
                    </Button>
                  </div>
                )}
              </div>
            </Modal>
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
