import { Row, Col, Typography, Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterLogo from "../../images/Tanweer_footer_Logo.png";
import XLogo from "../../images/X Logo.png";
import IGLogo from "../../images/IG Logo.png";
import "./footer.css";
const { Text } = Typography;

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="footer">
      <Row gutter={16} className="footer-row">
        <Col span={isMobile ? 24 : 8} className="first-col">
          <Row align="middle" style={{ flexDirection: "column" }}>
            <Col className="logoandicons">
              <img src={FooterLogo} alt="icon" className="footer_logo" />
              <div className="padding-top">
                <img
                  src={IGLogo}
                  alt="icon"
                  className="iglogo"
                  style={{ marginRight: "30px" }}
                />
                <img src={XLogo} alt="icon" className="xlogo" />
              </div>
            </Col>
            {!isMobile && (
              <Col className="footer-text-year">
                <Text className="footer-year">© 2024 Tanweer Festival</Text>
              </Col>
            )}
          </Row>
        </Col>
        <Col span={isMobile ? 24 : 8} className="middle-section">
          <Text className="first-text">Be the first to know</Text>
          <Text className="subscribe-text">
            SUSCRIBE TO RECEIVE OUR LATEST NEWS
          </Text>
        </Col>
        <Col span={isMobile ? 24 : 8} className="bottom-section">
          <div className="container">
            <Input
              className="custom-input"
              placeholder="Email Address"
              suffix={
                <Button className="custom-button" type="primary">
                  Subscribe
                </Button>
              }
            />
          </div>
        </Col>
        {isMobile && (
          <Col className="footer-text-year">
            <Text className="footer-year">© 2024 Tanweer Festival</Text>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Footer;
