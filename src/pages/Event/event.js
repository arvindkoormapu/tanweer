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

  const event = pages.home.events.find((e) => e.id === id);

  return (
    <Layout className="activity">
      <Content>
        {/* <div
          className="floating-button"
          onClick={() =>
            window.open("https://experience.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div> */}
        <div className="top_banner">
          <div className="image-container">
            <img
              src={require(`../../${event.banner}`)}
              alt="icon"
            />
          </div>
          <div className="content">
            <Text className="title">{event.title}</Text>
            <Text className="description">{event.date}</Text>
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
                {event.detailedBody.map((item, index) =>
                  typeof item === "string" ? (
                    <Text
                      key={index}
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        lineHeight: "1.8",
                        color: "#731D14",
                      }}
                    >
                      {item}
                    </Text>
                  ) : (
                    <Text
                      key={index}
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        lineHeight: "1.8",
                        color: "#731D14",
                      }}
                    >
                      {item.text}{" "}
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#731D14",
                          textDecoration: "underline",
                        }}
                      >
                        {item.link}
                      </a>
                    </Text>
                  )
                )}
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
                  src={require(`../../${event.image}`)}
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
