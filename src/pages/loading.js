import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import rotatingCircle from "../images/Loading/Rotating Circle.webp";
import circleOutline from "../images/Loading/Circle Outline.webp";
import tanweerLogoIcon from "../images/Loading/Tanweer Logo Icon.webp";
import headerLogo from "../images/logo_white.png";
import loadingMusic from "../Tibetan Healing Sounds.mp3";
import Landing from "./Landing";
import HeaderComponent from "../components/LandingHeader";
import Footer from "../components/LandingFooter";

const { Header, Content } = Layout;
const { Text } = Typography;

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});
  const [showLanding, setShowLanding] = useState(false);

  const [text, setText] = useState("IN");

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const navigate = useNavigate();

  useEffect(() => {
    setShowLanding(false);
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      const targetDate = new Date("2024-11-22T17:00:00"); // Set your target date here
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
    }
  }, [loading]);

  useEffect(() => {
    const audio = new Audio(loadingMusic);

    // Function to play audio
    const playAudio = () => {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    };

    // Attempt to play immediately
    playAudio();

    // Add event listener for interaction or visibility change
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("visibilitychange", handleUserInteraction);
    };

    // Listen for user interactions or visibility change
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });
    document.addEventListener("visibilitychange", handleUserInteraction, {
      once: true,
    });

    const rotations = 1;
    const rotationTime = 15;
    const totalRotationTime = rotations * rotationTime * 1000;
    setTimeout(() => {
      setText("OUT");
    }, 10000);

    const redirectTimeout = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      sessionStorage.setItem("loaded", "true");
      // navigate("/landing");
      setShowLanding(true);
    }, totalRotationTime);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(redirectTimeout);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("visibilitychange", handleUserInteraction);
    };
  }, [navigate]);

  return !showLanding ? (
    <Layout className="main-layout">
      <Header className={`header ${isMobile && "header-mobile"}`}>
        <img
          rel="preload"
          src={headerLogo}
          alt="Header Logo"
          className={`header-logo ${isMobile && "header-logo-mobile"}`}
        />
      </Header>
      <Content className="main-content">
        {loading ? (
          <div
            className={`loading-message ${
              isMobile && "loading-message-mobile"
            } ${loading && "zoom-out"}`}
          >
            {!isMobile ? (
              <span>
                As our page loads,
                <br /> pause for a moment & take a deep breath
              </span>
            ) : (
              <span>
                As our page loads,
                <br /> pause for a<br /> moment & take a<br /> deep breath
              </span>
            )}
          </div>
        ) : (
          <>
            <Row
              className={`${
                isMobile ? "rotating-container mobile" : "rotating-container"
              }`}
              justify="center"
              align="middle"
            >
              <div>
                <Text
                  className={`breathe-in ${isMobile && "breathe-in-mobile"}`}
                >
                  BREATHE {text}
                </Text>
              </div>
              <Col className={`center ${isMobile && "center-mobile"}`}>
                <img
                  rel="preload"
                  src={circleOutline}
                  alt="Circle Outline"
                  className="circle-outline"
                />
                <img
                  rel="preload"
                  src={tanweerLogoIcon}
                  alt="Tanweer Logo Icon"
                  className="logo-icon"
                />
                <div className="orbit">
                  <img
                    rel="preload"
                    src={rotatingCircle}
                    alt="Rotating Circle"
                    className={`rotating-circle ${
                      isMobile && "rotating-circle-mobile"
                    }`}
                  />
                </div>
              </Col>
              <div className="bottom-text">
                <Text
                  className={`journey-text ${
                    isMobile && "journey-text-mobile"
                  }`}
                >
                  your journey begins here
                </Text>
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
                      className={`time-style ${
                        isMobile && "time-style-mobile"
                      }`}
                    >
                      Days
                    </Text>
                  </Col>
                  <Col className="colon-column">
                    <Text
                      className={`colon-style ${
                        isMobile && "colon-style-mobile"
                      }`}
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
                      className={`time-style ${
                        isMobile && "time-style-mobile"
                      }`}
                    >
                      Hours
                    </Text>
                  </Col>
                  <Col className="colon-column">
                    <Text
                      className={`colon-style ${
                        isMobile && "colon-style-mobile"
                      }`}
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
                      className={`time-style ${
                        isMobile && "time-style-mobile"
                      }`}
                    >
                      Minutes
                    </Text>
                  </Col>
                  <Col className="colon-column">
                    <Text
                      className={`colon-style ${
                        isMobile && "colon-style-mobile"
                      }`}
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
                      className={`time-style ${
                        isMobile && "time-style-mobile"
                      }`}
                    >
                      Seconds
                    </Text>
                  </Col>
                </Row>
              </div>
            </Row>
          </>
        )}
      </Content>
    </Layout>
  ) : (
    <>
      <HeaderComponent />
      <Landing />
      <Footer />
    </>
  );
};

export default Loading;
