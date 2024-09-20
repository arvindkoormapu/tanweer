import React, { useRef } from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import PatternIcon from "../../images/Pattern_Icon.png";

import "./festival_pass.css";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

function FestivalPass() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Layout className="pass">
      <Content>
        <div className="top_banner">
          <div className="wrapper">
            <div className="content">
              <Text className="title">{pages.pass.top_banner.title}</Text>
              <Text className="description">
                {pages.pass.top_banner.description}
              </Text>
            </div>
            {!isMobile && (
              <div className="image">
                <img
                  style={{ width: "100%" }}
                  src={require(`../../${pages.pass.top_banner.image}`)}
                  alt="icon"
                />
              </div>
            )}
          </div>
        </div>
        <div className="bottom_banner">
          <Paragraph className="para">
            {pages.pass.top_banner.description1}
          </Paragraph>
          <Paragraph className="para">
            {pages.pass.top_banner.description2}
          </Paragraph>
          <Paragraph className="para">
            {pages.pass.top_banner.description3}
          </Paragraph>
        </div>

        <div className="middle_section">
          <div className="dark-arrows">
            <Text className="h1">Festival Passes</Text>
          </div>
          <Row>
            {pages.pass.festival_passes.map((elm) => (
              <Col
                span={isMobile ? 24 : 9}
                style={{
                  paddingRight: !isMobile && "30px",
                  paddingBottom: isMobile && "30px",
                }}
              >
                <div className="pass-wrapper">
                  <Text className="title">{elm.title}</Text>
                  <Text className="caption">{elm.caption}</Text>
                  <Text className="para des">{elm.description}</Text>
                  <div className="ticket-wrapper">
                    {elm.types.map((item) => (
                      <div className="ticket">
                        <Text className="para text-uppercase">
                          {item.title}
                        </Text>
                        <Text className={`price text-uppercase ${item.status}`}>
                          {item.price}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <Text
                    className="button"
                    onClick={() =>
                      window.open(
                        "https://tickets.tanweerfestival.com/",
                        "_blank"
                      )
                    }
                  >
                    get pass now
                  </Text>
                </div>
              </Col>
            ))}
          </Row>

          <div className="dark-arrows" style={{ marginTop: "60px" }}>
            <Text className="h1">Day Passes</Text>
          </div>
          <Row>
            {pages.pass.day_passes.map((elm) => (
              <Col
                span={isMobile ? 24 : 9}
                style={{
                  paddingRight: !isMobile && "30px",
                  paddingBottom: isMobile && "30px",
                }}
              >
                <div className="pass-wrapper">
                  <Text className="title">{elm.title}</Text>
                  <Text className="caption">{elm.caption}</Text>
                  <Text className="para des">{elm.description}</Text>
                  <div className="ticket-wrapper">
                    {elm.types.map((item) => (
                      <div className="ticket">
                        <Text className="para text-uppercase">
                          {item.title}
                        </Text>
                        <Text className={`price text-uppercase ${item.status}`}>
                          {item.price}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <Text
                    className="button"
                    onClick={() =>
                      window.open(
                        "https://tickets.tanweerfestival.com/",
                        "_blank"
                      )
                    }
                  >
                    get pass now
                  </Text>
                </div>
              </Col>
            ))}
          </Row>

          <Paragraph
            className="para"
            style={{
              padding: !isMobile ? "50px 0px 20px" : "40px 0px 30px",
              width: !isMobile && "40%",
            }}
          >
            Explore our <b>Stay & Activities</b> page to enrich your experience
            at Tanweer Festival, ensuring every moment is infused with
            meaning and inspiration.
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
}

export default FestivalPass;
