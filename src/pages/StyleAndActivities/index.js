import React from "react";
import { Layout, Row, Col, Typography, Space, Tooltip } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import PatternIcon from "../../images/Pattern_Icon.png";
import ArrowLeft from "../../images/StyleAndActivities/arrowLDark.webp";
import ArrowRight from "../../images/StyleAndActivities/arrowRDark.webp";
import ArrowLeftLight from "../../images/StyleAndActivities/arrowlLight.webp";
import ArrowRightLight from "../../images/StyleAndActivities/arrowRlight.webp";
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

  const onSwiper = (swiper) => {
    swiperInstance = swiper; // Store the Swiper instance
  };

  const onSwiperCamp = (swiper) => {
    swiperInstanceCamp = swiper; // Store the Swiper instance
  };

  const onSwiperOffer = (swiper) => {
    swiperInstanceOffer = swiper; // Store the Swiper instance
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

  return (
    <Layout className="activity">
      <Content>
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
            <Text className="h1">Awaiting Activities</Text>
            <div>
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
                    <div className="button" onClick={() => window.open('https://staging.tanweerfestival.com/', '_blank')}>Book now</div>
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
                      <div className="button" onClick={() => window.open('https://staging.tanweerfestival.com/', '_blank')}>Book now</div>
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
                      style={{ width: "100%", borderRadius: "20px" }}
                    />
                    <div className="top-slide-text">
                      <div
                        style={{
                          paddingLeft: "6px",
                          textAlign: isMobile && "center",
                        }}
                      >
                        <div className="title">{elm.title}</div>
                        <div className="description">{elm.description}</div>
                        <div className="price">{elm.price}</div>
                      </div>
                      <div className="button" onClick={() => window.open('https://staging.tanweerfestival.com/', '_blank')}>Book now</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>

        <div className="bottom_section">
          <div className="dark-arrows">
            <Text className="h1">hotel offers</Text>
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
            {pages.activities.offer.map((elm, index) => (
              <SwiperSlide key={index}>
                <div className="top-drag-slider">
                  <img
                    src={require(`../../${elm.image}`)}
                    alt={elm.title}
                    style={{ width: "100%", height: '306px', objectFit: 'cover', borderRadius: "20px" }}
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
                    <div className="button" onClick={() => window.open('https://staging.tanweerfestival.com/', '_blank')}>Book now</div>
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
