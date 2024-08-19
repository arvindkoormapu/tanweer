import React from "react";
import { Layout, Space, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import ImageSlider from "../../components/ImageSlider";
import Path from "../../images/Path 356.png";
import LandingFirst from "../../images/Home/landing-first.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "./program.css";
import { useState } from "react";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

const tabs = [
  { label: "music", id: 0 },
  { label: "Workshops", id: 1 },
  { label: "ARt", id: 2 },
];

function Programs() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const chunkedArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const artChunks = chunkedArray(pages.programs.art, 4);

  return (
    <Layout className="about">
      <Content>
        <ImageSlider slides={pages.programs.slides} />
        <div className="menus">
          <div className="middle-tabs">
            <Space direction="horizontal" size="middle" className="space">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <Text
                    className={`text ${activeTab === index && "active-tab"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </Text>
                  {index < tabs.length - 1 && (
                    <img src={Path} alt="icon" className="pattern" />
                  )}
                </React.Fragment>
              ))}
            </Space>
          </div>
        </div>
        {activeTab !== 2 && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: isMobile ? "0px" : "20px 0px 0px",
              }}
            >
              {pages.programs.dates.map((elm, i) => (
                <Text
                  className={`dates-tab ${
                    activeSubTab === i && "active-sub-tab"
                  }`}
                  onClick={() => setActiveSubTab(i)}
                >
                  {elm}
                </Text>
              ))}
            </div>
            <Row
              gutter={isMobile ? [20, 20] : [30, 30]}
              className="artist-wrapper"
            >
              {pages.programs.tabData[activeTab][activeSubTab].map((elm, i) => (
                <Col span={isMobile ? 24 : 12}>
                  <img
                    className="artist-program-images"
                    src={require(`../../${elm}`)}
                    alt="icon"
                  />
                </Col>
              ))}
            </Row>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="landing-content" style={{ background: "none" }}>
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
                </Col>
              </Row>
            </div>

            {isMobile ? (
              <Swiper
                spaceBetween={2}
                slidesPerView={isMobile ? 2 : 4}
                centeredSlides={false}
                grabCursor={true}
                style={{ width: "100%", paddingBottom: '10px' }}
              >
                {pages.programs.art.map((elm, index) => (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <img
                        className="art-images"
                        rel="preload"
                        src={require(`../../${elm}`)}
                        alt="Rotating Circle"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              artChunks.map((chunk, index) => (
                <Row key={index}>
                  {chunk.map((elm, idx) => (
                    <Col key={idx} className="p-0" xs={24} sm={12} md={6}>
                      <img
                        className="art-images"
                        src={require(`../../${elm}`)}
                        alt="icon"
                      />
                    </Col>
                  ))}
                </Row>
              ))
            )}
          </>
        )}
      </Content>
    </Layout>
  );
}

export default Programs;
