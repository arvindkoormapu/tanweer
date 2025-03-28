import React, { useRef, useState } from "react";
import { Row, Col, Typography, Input, Button, Space, message } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "../../images/Tanweer_footer_Logo.png";
import XLogo from "../../images/X Logo.png";
import IGLogo from "../../images/IG Logo.png";
import { useData } from "../../hooks/useData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./footer.css";
const { Text } = Typography;

const Footer = () => {
  const inputRef = useRef(null);

  const { pages } = useData();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const redirect = (link) => {
    if (link === "/festival_passes") {
      window.location.href = "https://experience.tanweerfestival.com";
      scrollToTop();
    } else {
      navigate(link, { replace: true });
      scrollToTop();
    }
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
      inputRef.current.blur();
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
        "https://connect.mailerlite.com/api/subscribers",
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
      } else {
        setLoading(false);
        messageApi.open({
          type: "error",
          content: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setLoading(false);
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
                <Text className="footer-year">© 2025 Tanweer Festival</Text>
              </Col>
            )}
          </Row>
        </Col>
        <Col span={isMobile ? 24 : 16} className="middle-section">
          <Space style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text className="first-text">Be the first to know</Text>
              <Text className="subscribe-text">
                Subscribe TO RECEIVE OUR LATEST NEWS
              </Text>
            </div>
            {!isMobile && (
              <div className="container">
                <Input
                  ref={inputRef}
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
            )}
          </Space>
          {/* {!isMobile && (
            <Space
              size="large"
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginTop: "74px",
                justifyContent: "space-between",
              }}
            >
                <div>
                  <div style={{ height: "50px" }}>
                      <React.Fragment>
                        <Text className="footer-links-header">Archive</Text>
                        <br />
                      </React.Fragment>
                  </div>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ rowGap: "0px" }}
                  >
                    
                      <Text
                        className="footer-links-sections"
                        onClick={() => redirect("/2024")}
                      >
                        2024
                      </Text>
                  </Space>
                </div>
            </Space>
          )} */}
        </Col>

        {isMobile && (
          <>
            <Col span={24} className="bottom-section">
              <div className="container">
                <Input
                  ref={inputRef}
                  className="custom-input"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Button
                  className="custom-button"
                  type="primary"
                  onClick={(e) => handleSubscribe(e)}
                  style={{ marginLeft: "10px" }}
                  loading={loading}
                >
                  Subscribe
                </Button>
              </div>
            </Col>
            <Col className="footer-text-year">
              {/* <Space size="middle" direction="vertical">
                {pages.footer.footer_menu_mobile.map((elm, i) => (
                  <Text
                    className="footer-links"
                    onClick={() => redirect(elm.link)}
                  >
                    {elm.title}
                  </Text>
                ))}
              </Space> */}
{/* <a href="/2024">View 2024 Archive</a> */}
              <Text className="footer-year">© 2025 Tanweer Festival</Text>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Footer;
