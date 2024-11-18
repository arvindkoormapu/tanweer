import React, { useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import ArrowLeft from "../images/StyleAndActivities/arrowLDark.webp";
import ArrowRight from "../images/StyleAndActivities/arrowRDark.webp";
import ButtonComponent from "../components/Button";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const EventSlider = ({ events }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const currentEvent = events[currentIndex];

  const redirect = (link) => {
    navigate(link, { replace: true });
    scrollToTop();
  };

  return (
    <div
      style={{
        background: "#EFBB6B",
        height: "578px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        position: "relative", // For positioning the arrows
      }}
    >
      {/* Arrows */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "5%",
          display: "flex",
          flexDirection: "row", // Stack arrows vertically
          gap: "10px", // Add spacing between arrows
          zIndex: 10,
        }}
      >
        <div
          style={{
            cursor: "pointer",
            fontSize: "1.5rem", // Adjust size of the arrow
          }}
          onClick={handlePrev}
        >
          <img
            src={ArrowLeft}
            alt="image1"
            style={{
              height: "18px",
              paddingRight: "10px",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            cursor: "pointer",
            fontSize: "1.5rem", // Adjust size of the arrow
          }}
          onClick={handleNext}
        >
          <img
            src={ArrowRight}
            alt="image1"
            style={{ height: "18px", cursor: "pointer" }}
          />
        </div>
      </div>

      <div
        style={{
          background: "#FFF5D9",
          borderRadius: "20px",
          width: "90%",
          margin: "0 auto",
          height: "453px",
          overflow: "hidden", // Ensures children don't overflow
        }}
      >
        <Row
          gutter={[32, 32]}
          align="middle"
          justify="center"
          style={{
            margin: 0,
            height: "100%",
          }}
        >
          {/* Text Content */}
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <Text
                style={{
                  color: "#731D14",
                  display: "block",
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "29.77px",
                  textAlign: "left",
                }}
              >
                THE YEAR OF RUMI EVENTS
              </Text>
              <Title
                level={1}
                style={{
                  color: "#731D14",
                  fontFamily: "TAN-AESOP",
                  fontSize: "1.8rem",
                  fontWeight: "400",
                  lineHeight: "2.5rem",
                  textAlign: "left",
                  paddingTop: "4px",
                  margin: 0,
                }}
              >
                {currentEvent.title}
              </Title>
              <Title
                level={2}
                style={{
                  color: "#731D14",
                  fontFamily: "TAN-AESOP",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "39.53px",
                  letterSpacing: "0.2em",
                  textAlign: "left",
                  margin: 0,
                  paddingTop: "15px",
                }}
              >
                {currentEvent.date}
              </Title>
              <Text
                style={{
                  color: "#731D14",
                  display: "block",
                  fontFamily: "Roboto",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  lineHeight: "29.77px",
                //   paddingTop: "29px",
                  paddingBottom: "27px",
                }}
              >
                {currentEvent.body}
              </Text>
              <div className="button-component-wrapper2">
                    <ButtonComponent
                      style={{ cursor: "pointer" }}
                      bgColor="#731D14"
                      textColor="#FFF5D9"
                      clickAction={() => redirect(`/event/${currentEvent.id}`)}
                      text="Learn more"
                    />
                  </div>
            </Card>
          </Col>
          {/* Image Content */}
          <Col xs={24} md={12} style={{ padding: "0px", height: "100%" }}>
            <div
              style={{
                height: "100%",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <img
                alt={currentEvent.title}
                src={require(`./../${currentEvent.image}`)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensures the image fills the container proportionally
                  borderRadius: "12px",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EventSlider;
