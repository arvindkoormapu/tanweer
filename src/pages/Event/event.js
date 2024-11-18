import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import { useParams } from "react-router-dom";
import "../StyleAndActivities/style_and_activities.css";
const { Content } = Layout;
const { Text } = Typography;

function Event() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { id } = useParams();

  return (
    <Layout className="activity">
      <Content>
        <div
          className="floating-button"
          onClick={() =>
            window.open("https://experience.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div>
        <div className="top_banner">
          <div className="image-container">
            <img
              src={require(`../../${pages.home.events[id].banner}`)}
              alt="icon"
            />
          </div>
          <div className="content">
            <Text className="title">{pages.home.events[id].title}</Text>
            <Text className="description">{pages.home.events[id].date}</Text>
          </div>
        </div>

        <div
          style={{
            borderRadius: "20px",
            width: "90%",
            margin: "0 auto",
            padding: "40px 0px",
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
              <div style={{ padding: "10px" }}>
                {pages.home.events[id].detailedBody.map((paragraph, index) => (
                  <Text
                    key={index}
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      lineHeight: "1.8",
                      color: "#731D14",
                    }}
                  >
                    {paragraph}
                  </Text>
                ))}
              </div>
            </Col>
            <Col xs={24} md={12} style={{ padding: "0px", height: "100%" }}>
              <div
                style={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <img
                  src={require(`../../${pages.home.events[id].image}`)}
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
      </Content>
    </Layout>
  );
}

export default Event;
