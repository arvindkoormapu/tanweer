import React from "react";
import { Layout, Row, Col, Typography, Space, Tooltip, Card } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import PatternIcon from "../../images/Pattern_Icon.png";
import ArrowLeft from "../../images/StyleAndActivities/arrowLDark.webp";
import ArrowRight from "../../images/StyleAndActivities/arrowRDark.webp";
import ArrowLeftLight from "../../images/StyleAndActivities/arrowlLight.webp";
import ArrowRightLight from "../../images/StyleAndActivities/arrowRlight.webp";
import SliderArrowLeft from "../../images/StyleAndActivities/button left.png";
import SliderArrowRight from "../../images/StyleAndActivities/button right.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style_and_activities.css";
const { Content } = Layout;
const { Text } = Typography;

function StyleAndActivities() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  let swiperInstance = null;
  let swiperInstanceCamp = null;
  let swiperInstanceOffer = null;
  let swiperInstanceMarketplace = null;
  let swiperInstanceNourishing = null;

  const onSwiper = (swiper) => {
    swiperInstance = swiper; // Store the Swiper instance
  };

  const onSwiperCamp = (swiper) => {
    swiperInstanceCamp = swiper; // Store the Swiper instance
  };

  const onSwiperOffer = (swiper) => {
    swiperInstanceOffer = swiper; // Store the Swiper instance
  };

  const onSwiperMarketplace = (swiper) => {
    swiperInstanceMarketplace = swiper; // Store the Swiper instance
  };

  const onSwiperNourishing = (swiper) => {
    swiperInstanceNourishing = swiper; // Store the Swiper instance
  };

  const goToPrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goToPreviousCamp = () => {
    if (swiperInstanceCamp) {
      swiperInstanceCamp.slidePrev();
    }
  };

  const goToPreviousOffer = () => {
    if (swiperInstanceOffer) {
      swiperInstanceOffer.slidePrev();
    }
  };

  const goToPreviousMarketplace = () => {
    if (swiperInstanceMarketplace) {
      swiperInstanceMarketplace.slidePrev();
    }
  };

  const goToNextMarketplace = () => {
    if (swiperInstanceMarketplace) {
      swiperInstanceMarketplace.slideNext();
    }
  };

  const goToPreviousNourishing = () => {
    if (swiperInstanceNourishing) {
      swiperInstanceNourishing.slidePrev();
    }
  };

  const goToNextNourishing = () => {
    if (swiperInstanceNourishing) {
      swiperInstanceNourishing.slideNext();
    }
  };

  const goToNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToNextCamp = () => {
    if (swiperInstanceCamp) {
      swiperInstanceCamp.slideNext();
    }
  };

  const goToNextOffer = () => {
    if (swiperInstanceOffer) {
      swiperInstanceOffer.slideNext();
    }
  };

  const handleEmailClick = () => {
    // This will open the user's default email client with a new draft to the specified email
    window.location.href = "mailto:hazem.anees@snhgroups.com";
  };

  return (
    <Layout className="activity">
      <Content>
        <div
          className="floating-button"
          onClick={() =>
            window.open("https://tickets.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div>
        <div className="top_banner">
          <div className="image-container">
            <img
              src={require(`../../${pages.activities.top_banner.image}`)}
              alt="icon"
            />
          </div>
          <div className="content">
            <Text className="title">{pages.activities.top_banner.title}</Text>
            <Text className="description">
              {pages.activities.top_banner.description}
            </Text>
          </div>
        </div>

        <div className="middle_section">
          <div className="dark-arrows">
            <Text className="h1">On-Site Activities</Text>
            <div style={{ zIndex: 1 }}>
              <img
                src={ArrowLeft}
                alt="image1"
                onClick={goToPrevious}
                style={{
                  height: "18px",
                  paddingRight: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={ArrowRight}
                alt="image1"
                onClick={goToNext}
                style={{ height: "18px", cursor: "pointer" }}
              />
            </div>
          </div>

          <Swiper
            onSwiper={onSwiper}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3.3}
            grabCursor={true}
            style={{
              width: "100%",
            }}
            modules={[Navigation]}
          >
            {pages.activities.activities.map((elm, index) => (
              <SwiperSlide key={index}>
                <div className="top-drag-slider">
                  <img
                    src={require(`../../${elm.image}`)}
                    alt={elm.title}
                    style={{ width: "100%", borderRadius: "20px" }}
                  />
                  <div className="top-slide-text">
                    <div
                      style={{
                        paddingLeft: "6px",
                        textAlign: isMobile && "center",
                      }}
                    >
                      <Tooltip title={elm.title}>
                        <div className="title">{elm.title}</div>
                      </Tooltip>
                      <Tooltip title={elm.description}>
                        <div className="description">{elm.description}</div>
                      </Tooltip>

                      <div className="price">{elm.price}</div>
                    </div>
                    <div
                      className="button"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open(
                          "https://tickets.tanweerfestival.com/",
                          "_blank"
                        )
                      }
                    >
                      Book Now
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="top-header">
          <Space className="space">
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">{pages.header.top_section.text}</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">ACTIVITIES</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            {!isMobile && (
              <>
                <Text className="text">{pages.header.top_section.text}</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
                <Text className="text">ACTIVITIES</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
              </>
            )}
          </Space>
        </div>

        <div className="main-layout" style={{ height: "100%" }}>
          <div className="marketplace">
            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <Text className="h1" style={{ color: "#FFF5D9" }}>
                  {pages.activities.marketplace_section.title}
                </Text>
                <div>
                  <img
                    src={ArrowLeftLight}
                    alt="image1"
                    onClick={goToPreviousMarketplace}
                    style={{
                      height: "18px",
                      paddingRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <img
                    src={ArrowRightLight}
                    alt="image1"
                    onClick={goToNextMarketplace}
                    style={{ height: "18px", cursor: "pointer" }}
                  />
                </div>
              </div>
            ) : (
              <Text className="h1" style={{ color: "#FFF5D9" }}>
                {pages.activities.marketplace_section.title}
              </Text>
            )}
            <div
              className="description"
              style={{
                fontFamily: "Roboto",
                fontSize: isMobile ? "16px" : "22px",
                fontWeight: "400",
                lineHeight: isMobile ? "20px" : "29.77px",
                textAlign: "left",
                color: "#FFF5D9",
                paddingTop: "18px",
                width: isMobile ? "100%" : "60%",
              }}
            >
              {pages.activities.marketplace_section.description}
            </div>
            <div
              style={{
                borderRadius: "20px",
                background: "#FFF5D9",
                width: "100%",
                height: "548px",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "73px 0px",
                  height: "100%"
                }}
              >
                <div
                  className="swiper-button-prev-marketplace"
                  style={{
                    display: isMobile ? "none" : "flex",
                    flex: isMobile ? "0 0 0" : "0 0 10%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={SliderArrowLeft}
                    alt="image1"
                    onClick={goToPreviousMarketplace}
                    style={{ height: "44px", cursor: "pointer" }}
                  />
                </div>
                <div
                  style={{
                    flex: isMobile ? "0 0 100%" : "0 0 80%",
                    overflow: "hidden",
                  }}
                >
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={isMobile ? 1 : 3}
                    onSwiper={onSwiperMarketplace}
                    className="mySwiper"
                    style={{ width: "100%" }}
                  >
                    {pages.activities.marketplace_section.marketplace.map(
                      (slide, index) => (
                        <SwiperSlide key={index}>
                          <div
                            onClick={() => window.open(slide.link, "_blank")}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              padding: "16px",
                              alignItems: isMobile ? "center" : "flex-start",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={require(`../../${slide.image}`)}
                              alt={slide.title}
                              style={{
                                width: "100%",
                                height: "220px",
                                objectFit: "contain",
                                objectPosition: isMobile ? "center" : "left",
                                paddingBottom: "20px",
                                // borderBottom: "2px solid #731D14",
                              }}
                              className="mb-4"
                            />
                            {/* <Text
                              style={{
                                fontFamily: "Roboto",
                                fontSize: "24px",
                                fontWeight: "700",
                                lineHeight: "36px",
                                color: "#731D14",
                                paddingTop: "16px",
                                textAlign: isMobile ? "center" : "left",
                              }}
                            >
                              {slide.title}
                            </Text> */}
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
                <div
                  className="swiper-button-next-marketplace"
                  style={{
                    flex: isMobile ? "0 0 0" : "0 0 10%",
                    display: isMobile ? "none" : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={SliderArrowRight}
                    alt="image1"
                    onClick={goToNextMarketplace}
                    style={{ height: "44px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="camping_section">
          {isMobile ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Text className="h1">
                {pages.activities.nourishing_station_section.title}
              </Text>
              <div>
                <img
                  src={ArrowLeft}
                  alt="image1"
                  onClick={goToPreviousNourishing}
                  style={{
                    height: "18px",
                    paddingRight: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={ArrowRight}
                  alt="image1"
                  onClick={goToNextNourishing}
                  style={{ height: "18px", cursor: "pointer" }}
                />
              </div>
            </div>
          ) : (
            <Text className="h1">
              {pages.activities.nourishing_station_section.title}
            </Text>
          )}
          <div
            className="description"
            style={{
              fontFamily: "Roboto",
              fontSize: isMobile ? "16px" : "22px",
              fontWeight: "400",
              lineHeight: isMobile ? "20px" : "29.77px",
              textAlign: "left",
              color: "#A2441B",
              paddingTop: "18px",
              width: isMobile ? "100%" : "60%",
            }}
          >
            {pages.activities.nourishing_station_section.description}
          </div>
          <div
            style={{
              borderRadius: "20px",
              width: "100%",
              marginTop: "40px",
            }}
          >
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                style={{ paddingBottom: "24px" }}
                onSwiper={onSwiperNourishing}
                modules={[Navigation]}
              >
                {pages.activities.nourishing_station_section.stations.map(
                  (station, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        onClick={() => window.open(station.link, "_blank")}
                        style={{
                          width: "100%",
                          marginBottom: "16px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        cover={
                          <img
                            alt={station.title}
                            src={require(`../../${station.image}`)}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                              borderRadius: "20px",
                              boxShadow: "0px 4px 4px 0px #00000040",
                              objectPosition: "center",
                            }}
                          />
                        }
                      >
                        <Card.Meta
                          title={
                            <span
                              style={{
                                fontFamily: "Roboto",
                                fontSize: "24px",
                                fontWeight: "700",
                                lineHeight: "36px",
                                color: "#A2441B",
                                paddingTop: "16px",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              {station.title}
                            </span>
                          }
                        />
                      </Card>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            ) : (
              <Row gutter={[16, 16]}>
                {pages.activities.nourishing_station_section.stations.map(
                  (station, index) => (
                    <Col span={8} key={index}>
                      <Card
                        onClick={() => window.open(station.link, "_blank")}
                        style={{
                          width: "100%",
                          marginBottom: "16px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        cover={
                          <img
                            alt={station.title}
                            src={require(`../../${station.image}`)}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                              borderRadius: "20px",
                              boxShadow: "0px 4px 4px 0px #00000040",
                            }}
                          />
                        }
                      >
                        <Card.Meta
                          title={
                            <span
                              style={{
                                fontFamily: "Roboto",
                                fontSize: "24px",
                                fontWeight: "700",
                                lineHeight: "36px",
                                color: "#A2441B",
                                paddingTop: "16px",
                              }}
                            >
                              {station.title}
                            </span>
                          }
                        />
                      </Card>
                    </Col>
                  )
                )}
              </Row>
            )}
          </div>
        </div>

        <div className="top-header">
          <Space className="space">
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">{pages.header.top_section.text}</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            <Text className="text">ACTIVITIES</Text>
            <img src={PatternIcon} alt="icon" className="pattern" />
            {!isMobile && (
              <>
                <Text className="text">{pages.header.top_section.text}</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
                <Text className="text">ACTIVITIES</Text>
                <img src={PatternIcon} alt="icon" className="pattern" />
              </>
            )}
          </Space>
        </div>

        <div className="camping_section">
          <div className="dark-arrows">
            <Text className="h1">Camping</Text>
            {isMobile && (
              <div>
                <img
                  src={ArrowLeft}
                  alt="image1"
                  onClick={goToPreviousCamp}
                  style={{
                    height: "18px",
                    paddingRight: "10px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={ArrowRight}
                  alt="image1"
                  onClick={goToNextCamp}
                  style={{ height: "18px", cursor: "pointer" }}
                />
              </div>
            )}
          </div>
          {isMobile ? (
            <Swiper
              onSwiper={onSwiperCamp}
              spaceBetween={30}
              slidesPerView={isMobile ? 1 : 3.3}
              grabCursor={true}
              style={{
                width: "100%",
              }}
              modules={[Navigation]}
            >
              {pages.activities.camping.map((elm, index) => (
                <SwiperSlide key={index}>
                  <div className="top-drag-slider">
                    <img
                      src={require(`../../${elm.image}`)}
                      alt={elm.title}
                      style={{
                        width: "100%",
                        borderRadius: "20px",
                        aspectRatio: "16/11",
                      }}
                    />
                    <div className="top-slide-text">
                      <div
                        style={{
                          paddingLeft: "6px",
                          textAlign: isMobile && "center",
                        }}
                      >
                        <Tooltip title={elm.title}>
                          <div className="title">{elm.title}</div>
                        </Tooltip>
                        <Tooltip title={elm.description}>
                          <div className="description">{elm.description}</div>
                        </Tooltip>
                        {/* <div className="checkouttime">{elm.checkout}</div> */}
                        <div
                          className="price"
                          dangerouslySetInnerHTML={{ __html: elm.price1 }}
                        />
                        <div className="price-des">
                          {elm.price1_description}
                        </div>
                        <div
                          className="price"
                          dangerouslySetInnerHTML={{ __html: elm.price2 }}
                        />
                        <div className="price-des">
                          {elm.price2_description}
                        </div>
                      </div>
                      <div
                        className="button"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            "https://tickets.tanweerfestival.com/",
                            "_blank"
                          )
                        }
                      >
                        Book Now
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Row gutter={30}>
              {pages.activities.camping.map((elm, index) => (
                <Col span={8}>
                  <div className="top-drag-slider">
                    <img
                      src={require(`../../${elm.image}`)}
                      alt={elm.title}
                      style={{
                        width: "100%",
                        borderRadius: "20px",
                        aspectRatio: "16/11",
                      }}
                    />
                    <div className="top-slide-text">
                      <div
                        style={{
                          paddingLeft: "6px",
                          textAlign: isMobile && "center",
                        }}
                      >
                        <Tooltip title={elm.title}>
                          <div className="title">{elm.title}</div>
                        </Tooltip>
                        <Tooltip title={elm.description}>
                          <div className="description">{elm.description}</div>
                        </Tooltip>
                        {/* <div className="checkouttime">{elm.checkout}</div> */}
                        <div style={{ minHeight: "108px" }}>
                          <div
                            className="price"
                            dangerouslySetInnerHTML={{ __html: elm.price1 }}
                          />
                          <div className="price-des">
                            {elm.price1_description}
                          </div>
                          <div
                            className="price"
                            dangerouslySetInnerHTML={{ __html: elm.price2 }}
                          />
                          <div className="price-des">
                            {elm.price2_description}
                          </div>
                        </div>
                      </div>
                      <div
                        className="button"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            "https://tickets.tanweerfestival.com/",
                            "_blank"
                          )
                        }
                      >
                        Book Now
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>

        <div className="bottom_section">
          <div className="dark-arrows">
            <Text className="h1">Make it a staycation</Text>
            <div>
              <img
                src={ArrowLeftLight}
                alt="image1"
                onClick={goToPreviousOffer}
                style={{
                  height: "18px",
                  paddingRight: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={ArrowRightLight}
                alt="image1"
                onClick={goToNextOffer}
                style={{ height: "18px", cursor: "pointer" }}
              />
            </div>
          </div>

          <Swiper
            onSwiper={onSwiperOffer}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3}
            grabCursor={true}
            style={{
              width: "100%",
            }}
            modules={[Navigation]}
          >
            {pages.activities.staycation.map((elm, index) => (
              <SwiperSlide key={index}>
                <div className="top-drag-slider">
                  <img
                    src={require(`../../${elm.image}`)}
                    alt={elm.title}
                    style={{
                      width: "100%",
                      height: "306px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                  <div className="top-slide-text">
                    <div
                      style={{
                        paddingLeft: "6px",
                        textAlign: isMobile && "center",
                      }}
                    >
                      <Tooltip title={elm.title}>
                        <div className="title">{elm.title}</div>
                      </Tooltip>
                      <Tooltip title={elm.description}>
                        <div className="description">{elm.description}</div>
                      </Tooltip>
                      <div className="price">{elm.price}</div>
                    </div>
                    {elm.title === "Hotel Holiday International" ? (
                      <div
                        className="button"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEmailClick()}
                      >
                        Book Now
                      </div>
                    ) : (
                      <div
                        className="button"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open(elm.link, "_blank")}
                      >
                        Book Now
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Content>
    </Layout>
  );
}

export default StyleAndActivities;
