import React from "react";
import { Layout, Space, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import LandingPageImage from "../../images/landing_page_image.png";
import Path from "../../images/Path 356.png";

const { Content } = Layout;
const { Text } = Typography;

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Layout className="landing">
      <Header />
      <Content>
        <div className="landing-banner">
          <div className="image-container">
            <img src={LandingPageImage} alt="icon" className="image" />
          </div>
          <div className="content">
            <Text className="title">your journey Begins here</Text>
            <Text className="button">Register your interest</Text>
            <Text className="date">22, 23, 24 NOVEMBER, 2024</Text>
            <Text className="caption">MLEIHA - SHARJAH - UAE</Text>
          </div>
        </div>
        <div className="middle-tabs">
          <Space direction="horizontal" size="middle" className="space">
            <Text className="text">music</Text>
            <img src={Path} alt="icon" className="pattern" />
            <Text className="text">Workshops</Text>
            <img src={Path} alt="icon" className="pattern" />
            <Text className="text">ARt</Text>
          </Space>
        </div>
        <div className="">

        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;
