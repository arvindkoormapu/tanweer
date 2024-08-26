import React from "react";
import { Layout, Space, Row, Col, Typography, Popover } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import ImageSlider from "../../components/ImageSlider";
import Path from "../../images/Path 356.png";
import Art from "../../images/Programs/art.webp";
import Share from "../../images/SHARE ICON.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "./program.css";
import { useState } from "react";
import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Helmet } from "react-helmet";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

const tabs = [
  { label: "music", id: 0 },
  { label: "Workshops", id: 1 },
  { label: "ARt", id: 2 },
];

const ShareContent = ({ url, title, imageUrl }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Check out this amazing content!"
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Helmet>
      <TwitterShareButton url={url} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

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
              {pages.programList[activeTab === 0 ? "music" : "workshops"][
                activeSubTab
              ].programs[0].list.map((elm, i) => (
                <Col span={isMobile ? 24 : 12}>
                  <img
                    className="artist-program-images"
                    src={require(`../../${elm.image}`)}
                    alt="icon"
                    style={{ position: "relative" }}
                  />
                  <Popover
                    content={
                      <ShareContent
                        url={`${window.location.href}`}
                        title={elm.name}
                        imageUrl={`${window.location.href}/static/media/${elm.image}`}
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
                spaceBetween={220}
                slidesPerView={2}
                centeredSlides={false}
                grabCursor={true}
                style={{ width: "100%", paddingBottom: "10px" }}
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
                        src={require(`../../${elm.image}`)}
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
                      <div className="art-slide">
                        <img
                          className="art-images"
                          src={require(`../../${elm.image}`)}
                          alt="icon"
                        />
                        <div className="text-wrapper">
                          <Text className="name">{elm.name}</Text>
                          <Text className="caption">{elm.caption}</Text>
                        </div>
                      </div>
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
