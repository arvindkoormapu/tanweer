import React, { useState } from "react";
import { Layout, Space, Row, Col, Typography, Popover, Tooltip } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import ImageSlider from "../../components/ImageSlider";
import Path from "../../images/Path 356.png";
import Art from "../../images/Programs/art.webp";
import Share from "../../images/SHARE ICON.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ShareContent from "../../components/Share";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/navigation";
import "./program.css";

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
      <Helmet>
        <meta property="og:title" content={"Arvind"} />
        <meta property="og:description" content="Amazing content to share!" />
        <meta
          property="og:image"
          content={`${window.location.origin}/artist_images/Sami-Yusuf.webp`}
        />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Content>
        {/* <div
          className="floating-button"
          onClick={() =>
            window.open("https://experience.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div> */}

        <ImageSlider slides={pages.programs.slides} />
        <div className="menus">
          <div className="middle-tabs">
            <Space direction="horizontal" size="middle" className="space">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <Text
                    className={`text ${activeTab === index && "active-tab"}`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      tab.id === 1 && setActiveSubTab(1);
                    }}
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
              {pages.programs.dates.map(
                (elm, i) =>
                  (activeTab === 0 || (activeTab === 1 && i !== 0)) && (
                    <Text
                      className={`dates-tab ${
                        activeSubTab === i && "active-sub-tab"
                      }`}
                      onClick={() => setActiveSubTab(i)}
                    >
                      {elm}
                    </Text>
                  )
              )}
            </div>
            <Row
              gutter={isMobile ? [20, 20] : [30, 30]}
              className="artist-wrapper"
            >
              {pages.programList[activeTab === 0 ? "music" : "workshops"][
                activeSubTab
              ].programs[0].list.map((elm, i) => (
                <Col span={isMobile ? 24 : 12}>
                  <img
                    className="artist-program-images"
                    src={`${elm.image}`}
                    alt="icon"
                    style={{ position: "relative" }}
                  />
                  <Popover
                    content={
                      <ShareContent
                        url={`${window.location.href}`}
                        title={elm.name}
                        imageUrl={`${window.location.origin}${elm.image}`}
                      />
                    }
                    title="Share"
                    trigger="click"
                    placement="bottom"
                  >
                    <img
                      style={{
                        position: "absolute",
                        bottom: "18px",
                        right: "36px",
                        height: "22px",
                        cursor: "pointer",
                      }}
                      src={Share}
                      alt="icon"
                    />
                  </Popover>
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
                  <img src={Art} alt="icon" className="image" />
                </Col>
                <Col span={isMobile ? 24 : 12} className="content-row">
                  <Text className="title">
                    {pages.programs.art_section.title
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </Text>
                  <Paragraph className="paragraph">
                    {pages.programs.art_section.description}
                  </Paragraph>
                </Col>
              </Row>
            </div>

            {isMobile ? (
              <Swiper
                spaceBetween={0}
                slidesPerView={1.7}
                centeredSlides={false}
                grabCursor={true}
                style={{ width: "100%", paddingBottom: "10px" }}
              >
                {pages.programs.art.map((elm, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ textAlign: "center", background: "#000" }}
                  >
                    <div className="art-slide">
                      <div
                        className="image-container"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <img
                          className="art-images"
                          src={require(`../../${elm.image}`)}
                          alt="icon"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            background: "#000",
                          }}
                        />
                      </div>
                      <div className="text-wrapper">
                        <Text className="name">{elm.name}</Text>
                        <Text className="caption">{elm.caption}</Text>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              artChunks.map((chunk, index) => (
                <Row key={index} gutter={0}>
                  {chunk.map((elm, idx) => (
                    <Col key={idx} className="p-0" xs={24} sm={12} md={5}>
                      <Tooltip title={<span dangerouslySetInnerHTML={{ __html: elm.caption.join('<br />') }} />} arrow>
                        <div className="art-slide">
                          <div
                            className="image-container"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <img
                              className="art-images"
                              src={require(`../../${elm.image}`)}
                              alt="icon"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                background: "#000",
                              }}
                            />
                          </div>
                          <div className="text-wrapper">
                            <Text className="name">{elm.name}</Text>
                          </div>
                        </div>
                      </Tooltip>
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
