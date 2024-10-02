import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;
const { Text } = Typography;

const FestivalPassCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  useEffect(() => {
    const targetDate = new Date("2024-10-02T14:00:00"); // Set your target date here
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="main-layout">
      <Content className="main-content">
        <Row
          className={`${
            isMobile ? "rotating-container mobile" : "rotating-container"
          }`}
          justify="center"
          align="middle"
        >
          <div className="bottom-text">
            <Row
              className="countdown"
              justify="center"
              align="middle"
              gutter={0} // Setting gutter to 0 to manage spacing manually
              style={{ marginTop: "23px" }}
            >
              <Col className="countdown-column">
                <Text
                  className={`number-style ${
                    isMobile && "number-style-mobile"
                  }`}
                >
                  {timeLeft.days || "0"}
                </Text>
                <Text
                  className={`time-style ${isMobile && "time-style-mobile"}`}
                >
                  Days
                </Text>
              </Col>
              <Col className="colon-column">
                <Text
                  className={`colon-style ${isMobile && "colon-style-mobile"}`}
                >
                  :
                </Text>
              </Col>
              <Col className="countdown-column">
                <Text
                  className={`number-style ${
                    isMobile && "number-style-mobile"
                  }`}
                >
                  {timeLeft.hours || "0"}
                </Text>
                <Text
                  className={`time-style ${isMobile && "time-style-mobile"}`}
                >
                  Hours
                </Text>
              </Col>
              <Col className="colon-column">
                <Text
                  className={`colon-style ${isMobile && "colon-style-mobile"}`}
                >
                  :
                </Text>
              </Col>
              <Col className="countdown-column">
                <Text
                  className={`number-style ${
                    isMobile && "number-style-mobile"
                  }`}
                >
                  {timeLeft.minutes || "0"}
                </Text>
                <Text
                  className={`time-style ${isMobile && "time-style-mobile"}`}
                >
                  Minutes
                </Text>
              </Col>
              <Col className="colon-column">
                <Text
                  className={`colon-style ${isMobile && "colon-style-mobile"}`}
                >
                  :
                </Text>
              </Col>
              <Col className="countdown-column">
                <Text
                  className={`number-style ${
                    isMobile && "number-style-mobile"
                  }`}
                >
                  {timeLeft.seconds || "0"}
                </Text>
                <Text
                  className={`time-style ${isMobile && "time-style-mobile"}`}
                >
                  Seconds
                </Text>
              </Col>
            </Row>
          </div>
        </Row>
      </Content>
    </Layout>
  );
};

export default FestivalPassCountdown;
