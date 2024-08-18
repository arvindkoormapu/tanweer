import React from "react";
import { Row, Col, Typography, Input, Button, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "../../images/Tanweer_footer_Logo.png";
import XLogo from "../../images/X Logo.png";
import IGLogo from "../../images/IG Logo.png";
import { useData } from "../../hooks/useData";

import "./footer.css";
const { Text } = Typography;

const Footer = () => {
  const { pages } = useData();

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="footer">
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
                  suffix={
                    <Button className="custom-button" type="primary">
                      Subscribe
                    </Button>
                  }
                />
              </div>
            )}
          </Space>
          {!isMobile && (
            <Space
              size="large"
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginTop: "74px",
                justifyContent: "space-evenly",
              }}
            >
              {pages.footer.footer_menu_header.map((elm, i) => (
                <div>
                  <div style={{ height: "50px" }}>
                    {elm.title.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        <Text className="footer-links-header">{line}</Text>
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ rowGap: "0px" }}
                  >
                    {elm.section.map((item) => (
                      <Text className="footer-links-sections">{item}</Text>
                    ))}
                  </Space>
                </div>
              ))}
            </Space>
          )}
        </Col>

        {isMobile && (
          <>
            <Col span={24} className="bottom-section">
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
            </Col>
            <Col className="footer-text-year">
              <Space size="middle" direction="vertical">
                {pages.footer.footer_menu_header.map((elm, i) => (
                  <Text className="footer-links">{elm.title}</Text>
                ))}
                <Text className="footer-links">UNSUSCRIBE</Text>
              </Space>

              <Text className="footer-year">© 2024 Tanweer Festival</Text>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Footer;
