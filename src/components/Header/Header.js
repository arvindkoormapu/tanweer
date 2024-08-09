import { Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import PatternIcon from "../../images/Pattern_Icon.png";
import headerLogo from "../../images/logo_dark.png";
import "./header.css";

const { Text } = Typography;

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Row style={{ flexDirection: "column" }}>
      <Col className="top-header">
        <Space className="space">
          <img src={PatternIcon} alt="icon" className="pattern" />
          <Text className="text">your journey Begins here</Text>
          <img src={PatternIcon} alt="icon" className="pattern" />
          <Text className="text">22, 23, 24 NOVEMBER, 2024</Text>
          <img src={PatternIcon} alt="icon" className="pattern" />
          {!isMobile && (
            <>
              <Text className="text">your journey Begins here</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
              <Text className="text">22, 23, 24 NOVEMBER, 2024</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
            </>
          )}
        </Space>
      </Col>
      <Col className="logo-section">
        <div className="logo-wrapper">
          <img src={headerLogo} alt="Header Logo" className="header-logo" />
        </div>
      </Col>
    </Row>
  );
};

export default Header;
