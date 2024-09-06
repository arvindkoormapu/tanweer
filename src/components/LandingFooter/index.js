import React, { useState } from "react";
import { Row, Col, Typography, Input, Button, Space, message } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "../../images/Tanweer_footer_Logo.png";
import XLogo from "../../images/X Logo.png";
import IGLogo from "../../images/IG Logo.png";
import axios from "axios";

import "./footer.css";
const { Text } = Typography;

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      if (!validateEmail(email)) {
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
        messageApi.open({
          type: "success",
          content: "Thank you for subscribing!",
        });
        setEmail("");
      } else {
        messageApi.open({
          type: "error",
          content: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      messageApi.open({
        type: "error",
        content: "Error subscribing. Please try again.",
      });
    }
  };

  return (
    <div className="footer">
      {contextHolder}
      <Row gutter={16} className="footer-row">
        <Col span={isMobile ? 24 : 8} className="first-col">
          <Row align="middle" style={{ flexDirection: "column" }}>
            <Col className="logoandicons">
              <img src={FooterLogo} alt="icon" className="footer_logo" />
              <div className="padding-top">
                <img
                  src={IGLogo}
                  alt="icon"
                  className="iglogo"
                  style={{ marginRight: "30px" }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/tanweerfestival/",
                      "_blank"
                    )
                  }
                />
                <img
                  src={XLogo}
                  alt="icon"
                  className="xlogo"
                  onClick={() =>
                    window.open("https://twitter.com/TanweerFestival", "_blank")
                  }
                />
              </div>
            </Col>
            {!isMobile && (
              <Col className="footer-text-year">
                <Text className="footer-year">© 2024 Tanweer Festival</Text>
              </Col>
            )}
          </Row>
        </Col>
        <Col span={isMobile ? 24 : 16} className="middle-section">
          <Space style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text className="first-text">Be the first to know</Text>
              <Text className="subscribe-text">
                SUSCRIBE TO RECEIVE OUR LATEST NEWS
              </Text>
            </div>
            {!isMobile && (
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
                    >
                      Subscribe
                    </Button>
                  }
                />
              </div>
            )}
          </Space>
        </Col>

        {isMobile && (
          <>
            <Col span={24} className="bottom-section">
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
                    >
                      Subscribe
                    </Button>
                  }
                />
              </div>
            </Col>
            <Col className="footer-text-year">
              <Text className="footer-year">© 2024 Tanweer Festival</Text>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Footer;
