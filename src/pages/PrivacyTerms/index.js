import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import "./PrivacyTerms.css";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

function PrivacyTerms() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const newTitles = [];

    Object.keys(pages.terms).forEach((key) => {
      const section = pages.terms[key];
      newTitles.push(section.title);
    });

    setTitles(newTitles);
  }, [pages.terms]);

  return (
    <Layout className="terms">
      <Content>
        {/* <div
          className="floating-button"
          onClick={() =>
            window.open("https://tickets.tanweerfestival.com/", "_blank")
          }
        >
          get passes NOW
        </div> */}
        <Row>
          <Col span={isMobile ? 24 : 6} className="style-mobile">
            <Space
              direction="vertical"
              style={{
                marginTop: !isMobile && "10px",
                alignItems: isMobile && "center",
              }}
            >
              {titles.map((title, index) => (
                <Text className="list-item">{title}</Text>
              ))}
            </Space>
          </Col>
          <Col span={isMobile ? 24 : 16}>
            <div className="content">
              <Text className="title">{pages.terms.firstSection.title}</Text>
              <Text className="description">
                {pages.terms.firstSection.content.join(" ")}
              </Text>
            </div>
          </Col>
        </Row>
        <div className="border"></div>
        <Row>
          <Col span={isMobile ? 24 : 12}>
            <div className="content">
              <Text className="title">{pages.terms.secondSection.title}</Text>
              <Text className="description">
                {pages.terms.secondSection.content.join(" ")}
              </Text>
            </div>
            <div className="border"></div>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <div className="content">
              <Text className="title">{pages.terms.thirdSection.title}</Text>
              <Text className="description">
                {pages.terms.thirdSection.content.join(" ")}
              </Text>
            </div>
            <div className="border"></div>
          </Col>
        </Row>
        <Row>
          <Col span={isMobile ? 24 : 24}>
            <div className="content">
              <Text className="title">{pages.terms.fourthSection.title}</Text>
              <Text className="description">
                {pages.terms.fourthSection.content.join(" ")}
              </Text>
            </div>
            <div className="border"></div>
          </Col>
          {/* <Col span={isMobile ? 24 : 12}>
            <div className="content">
              <Text className="title">{pages.terms.fifthSection.title}</Text>
              <Text className="description">
                {pages.terms.fifthSection.content.join(" ")}
              </Text>
            </div>
            <div className="border"></div>
          </Col> */}
        </Row>
        {/* <Row>
          <Col span={24} style={{ paddingBottom: "80px" }}>
            <div className="content">
              <Text className="title">{pages.terms.sixSection.title}</Text>
              <Text className="description">
                {pages.terms.sixSection.content.join(" ")}
              </Text>
            </div>
          </Col>
        </Row> */}
      </Content>
    </Layout>
  );
}

export default PrivacyTerms;
