import React, { useRef } from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import PatternIcon from "../../images/Pattern_Icon.png";
import MapImage from "../../images/mapimage.webp";
import XLogo from "../../images/X LogoDark.png";
import IGLogo from "../../images/IG LogoDark.png";

import "./contact.css";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

function Contact() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Layout className="contact">
      <Content>
        <div className="contact-wrapper">
          {isMobile && (
            <Col span={24}>
              <img
                src={MapImage}
                alt="icon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
          )}
          <Row>
            <Col span={isMobile ? 24 : 10} className="mobile-view">
              <div className="content">
                <Text className="title">{pages.contact.top_banner.title}</Text>
                <Text className="description">
                  {pages.contact.top_banner.description}
                </Text>
              </div>
              <div
                style={{
                  paddingTop: "50px",
                  marginLeft: isMobile ? "10%" : "0px",
                  marginBottom: isMobile ? "10%" : "0px",
                }}
              >
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
              <Col span={14}>
                <img
                  src={MapImage}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "calc(100vh - 142px)",
                    objectFit: "cover",
                  }}
                />
              </Col>
            )}
          </Row>
          <div className="top-header">
            <Space className="space">
              <img src={PatternIcon} alt="icon" className="pattern" />
              <Text className="text">{pages.header.top_section.text}</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
              <Text className="text">FAQs</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
              {!isMobile && (
                <>
                  <Text className="text">{pages.header.top_section.text}</Text>
                  <img src={PatternIcon} alt="icon" className="pattern" />
                  <Text className="text">FAQs</Text>
                  <img src={PatternIcon} alt="icon" className="pattern" />
                </>
              )}
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Contact;
