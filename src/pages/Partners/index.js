import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import Emaar from "../../images/Partners/Emaar Logo.png";
import Marwan from "../../images/Partners/Al Marwan.png";
import Arada from "../../images/Partners/Arada.png";
import Asas from "../../images/Partners/Asas Logo.png";
import Invest from "../../images/Partners/Invest Bank Logo.png";
import Beeah from "../../images/Partners/Beeah Logo.png";
import DU from "../../images/Partners/du-logo-new.png";

import Empost from "../../images/Partners/Empost Logo.png";
import Thumbay from "../../images/Partners/Thumbay Logo.png";
import Municipality from "../../images/Partners/Sharjah Municipality.png";
import Police from "../../images/Partners/Sharjah Police.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Partners.css";

const { Content } = Layout;
const { Text } = Typography;

function Partners() {
  const { pages } = useData();
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <Layout className="partners">
      <Content>
        <div className="content">
          <Text className="title">Partners</Text>
          <Text className="description">
          We proudly collaborate with industry leaders who share our vision for excellence, bringing you an unparalleled festival experience.
          </Text>
        </div>

        {!isMobile ? (
          <Space
            direction="vertical"
            size="large"
            style={{ padding: "60px 0px" }}
          >
            <Space size="large">
              <img
                src={Emaar}
                alt="icon"
                style={{ height: "65px", width: "100%", paddingRight: "100px" }}
              />
              <img src={Marwan} alt="icon" style={{ height: "76px" }} />
            </Space>
            <Space size="large" style={{ padding: "70px 0px" }}>
              <img src={Arada} alt="icon" style={{ height: "43px" }} />
            </Space>
            <Space size="large" style={{ padding: "20px 0px" }}>
              <img
                src={Asas}
                alt="icon"
                style={{ height: "79px", paddingRight: "50px" }}
              />
              <img
                src={Invest}
                alt="icon"
                style={{ height: "61px", paddingRight: "50px" }}
              />
              <img
                src={Beeah}
                alt="icon"
                style={{ height: "61px", paddingRight: "50px" }}
              />
              <img src={DU} alt="icon" style={{ height: "50px" }} />
            </Space>
            <Space size="large" style={{ padding: "30px 0px" }}>
              <img
                src={Empost}
                alt="icon"
                style={{ height: "76px", paddingRight: "50px" }}
              />
              <img
                src={Thumbay}
                alt="icon"
                style={{ height: "82px", paddingRight: "50px" }}
              />
              <img
                src={Municipality}
                alt="icon"
                style={{ height: "106px", paddingRight: "50px" }}
              />
              <img src={Police} alt="icon" style={{ height: "103px" }} />
            </Space>
          </Space>
        ) : (
          <Swiper
            spaceBetween={10} // Minimal space between slides
            slidesPerView={"auto"} // Automatically adjust the slide width
            grabCursor={true} // Enable grabbing cursor for easier sliding
            style={{ width: "100%", marginTop: "50px" }} // Ensures Swiper takes full width
          >
            <SwiperSlide>
              <img src={Emaar} alt="icon" style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Marwan} alt="icon" style={{ height: "76px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Arada} alt="icon" style={{ height: "43px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Asas} alt="icon" style={{ height: "79px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Invest} alt="icon" style={{ height: "61px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Beeah} alt="icon" style={{ height: "61px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={DU} alt="icon" style={{ height: "50px" }} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Empost} alt="icon" style={{ height: "76px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Thumbay} alt="icon" style={{ height: "82px" }} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Municipality} alt="icon" style={{ height: "106px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Police} alt="icon" style={{ height: "103px" }} />
            </SwiperSlide>
          </Swiper>
        )}
      </Content>
    </Layout>
  );
}

export default Partners;
