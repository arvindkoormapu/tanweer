import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import PatternIcon from "../../images/Pattern_Icon.png";
import MapImage from "../../images/mapimage.webp";
import XLogo from "../../images/X LogoDark.png";
import IGLogo from "../../images/IG LogoDark.png";
import Collapsible from "../../components/Collapsable";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "./contact.css";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

function Contact() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    setActiveTab(pages.contact.faqs[0]);
  }, [pages.contact.faqs]);

  const renderAnswer = (answer) => {
    const parts = answer.split(/<br\s*\/?>/); // Split by <br /> or <br>

    return (
      <div>
        {parts.map((part, index) => (
          <div
            key={index}
            style={{ paddingTop: "8px" }}
            dangerouslySetInnerHTML={{ __html: part }}
          />
        ))}
      </div>
    );
  };

  return (
    <Layout className="contact">
      <Content>
        {/* <div
          className="floating-button"
          onClick={() =>
            window.open("https://tickets.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div> */}
        <div className="contact-wrapper">
          {isMobile && (
            <Col span={24}>
              <a
                href="https://g.co/kgs/ZbsGYqq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MapImage}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </a>
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
                  marginLeft: !isMobile ? "12%" : "0px",
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
                <a
                  href="https://g.co/kgs/ZbsGYqq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MapImage}
                    alt="icon"
                    style={{
                      width: "100%",
                      height: "calc(100vh - 142px)",
                      objectFit: "cover",
                    }}
                  />
                </a>
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

        <div className="faq-section">
          <div className="content">
            <Text className="title" style={{ textTransform: "unset" }}>
              FAQs
            </Text>
          </div>

          <div className="tabs" style={{ position: "relative" }}>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              centeredSlides={false}
              grabCursor={true}
              style={{ width: "100%" }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]} // Include the Navigation module
            >
              {pages.contact.faqs.map((elm, index) => (
                <SwiperSlide
                  key={index}
                  style={{ display: "inline-block", width: "auto" }}
                >
                  <Text
                    onClick={() => setActiveTab(elm)}
                    className={`tab ${
                      activeTab?.name === elm.name ? "active-tab" : ""
                    }`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {elm.name}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {activeTab?.items.map((elm, index) => (
            <div
              className="collapsible"
              style={{
                borderBottom:
                  activeTab.items.length === index + 1 && "1px solid #A34411",
              }}
            >
              <Collapsible title={elm.question}>
                <Paragraph className="para" style={{ color: "#BF7139" }}>
                  {renderAnswer(elm.answer)}
                </Paragraph>
              </Collapsible>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export default Contact;
