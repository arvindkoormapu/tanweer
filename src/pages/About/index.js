import { Layout, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";

import "./about.css";
const { Content } = Layout;
const { Text, Paragraph } = Typography;

function About() {
  const { pages } = useData();

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Layout className="about">
      <Content>
        <div className="main-layout">
          <Row className="intro">
            {isMobile && (
              <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                <img
                  className="image1"
                  rel="preload"
                  src={require(`../../${pages.about.intro.image}`)}
                  alt="Rotating Circle"
                />
              </Col>
            )}
            <Col
              span={isMobile ? 24 : 14}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: isMobile ? 'auto' : "100%",
              }}
            >
              <Text className="text">{pages.about.intro.text}</Text>
              <Text className="caption">{pages.about.intro.caption}</Text>
            </Col>
            {!isMobile && (
              <Col
                span={10}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  className="image1"
                  rel="preload"
                  src={require(`../../${pages.about.intro.image}`)}
                  alt="Rotating Circle"
                />
              </Col>
            )}
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default About;
