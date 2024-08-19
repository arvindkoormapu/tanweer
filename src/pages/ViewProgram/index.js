import { Layout, Typography, Row, Col, Space } from "antd";
import { useData } from "../../hooks/useData";
import ProgramList from "../../components/ProgrmaList";
import { useMediaQuery } from "react-responsive";

import "./viewProgram.css";
import { useState } from "react";

const { Content } = Layout;
const { Text } = Typography;

function ViewProgram() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Layout className="view-program-container">
      <Content className="view-program-wrapper">
        <Text className="h1-program h1">Program</Text>
        {isMobile ? (
          <div>
            <Space style={{ justifyContent: "space-between", width: "86%" }}>
              {pages.programList.list.map((elm, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                    cursor: 'pointer',
                    opacity: activeIndex === i ? '1' : '0.4'
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <Text className="section-day">Day {i + 1}</Text>
                  <Text className="section-date">{elm.date}</Text>
                </div>
              ))}
            </Space>
            <ProgramList data={pages.programList.list[activeIndex].programs} />
          </div>
        ) : (
          <Row>
            {pages.programList.list.map((elm, i) => (
              <Col span={8}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <Text className="section-day">Day {i + 1}</Text>
                  <Text className="section-date">{elm.date}</Text>
                </div>

                <ProgramList data={elm.programs} />
              </Col>
            ))}
          </Row>
        )}
      </Content>
    </Layout>
  );
}

export default ViewProgram;
