import React from "react";
import { Layout, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import Emaar from "../../images/Partners/Emaar/EMAAR LOGO-English.png";
import Marwan from "../../images/Partners/Al Marwan Group/Marwan-Group_logo.png";
import Arada from "../../images/Partners/Arada/Arada_Logo_White_En.png";
import Tiger from "../../images/Partners/Tiger/Tiger.svg";
import Asas from "../../images/Partners/Asas/ASAS logo.png";
import Invest from "../../images/Partners/Invest Bank/Invest-Bank-Logo.svg";
import Beeah from "../../images/Partners/Beeah/Beeah_Master Logo_RGB_Bilingual2048.png";
import DU from "../../images/Partners/Du/du_Window_Brandmark_Gradient_RGB1.png";
import Thumbay from "../../images/Partners/Thumbay/Thumbay-Logo_red.png";
import SEWA from "../../images/Partners/SEWA/2024 SEWA logo.png";
import OrientTravel from "../../images/Partners/OrientTravel/OrientTravel.svg";
import MohamedHilal from "../../images/Partners/Mohammad Hilal/MH_Logo.png";
import EmiratesPost from "../../images/Partners/Empost Logo.png";
import SharjahMunicipality from "../../images/Partners/Sharjah Municipality.png";
import SharjahAirport from "../../images/Partners/Sharjah Airport/NEW Sharjah Airport Logo.png";
import SharjahTourism from "../../images/Partners/SCTDA/SCTDA.png";
import HardcoBuilding from "../../images/Partners/HARDCO/HARDCO-LOGO.svg";
import SharjahPolice from "../../images/Partners/Sharjah Police.png";
import SharjahHeritage from "../../images/Partners/Sharjah Heritage/Sharjah Heritage.svg";
// import SharjahCivilDefense from "../../images/Partners/SGMB_B/SGMB_B.png";
import SGMB from "../../images/Partners/SGMB_B/SGMB_B.svg";
import SharjahRTA from "../../images/Partners/Sharjah RTA/SRTA.png";
import Shurooq from "../../images/Partners/Shurooq/SHQ_Authority_White.png";
import EmiratesAirline from "../../images/Partners/Emirates/Ek Brand Box Logo-Brand Box.png";
import HolidayInternational from "../../images/Partners/Hotel-Holiday-International/Hotel-Holiday-International.png";
import Sheraton from "../../images/Partners/SHERATON/SHERATON-LOGO.png";
import DoubleTree from "../../images/Partners/SHJAW_DUAL_BLUE_RGB.png";
import SIRTIP from "../../images/Partners/SIRTIP.png";
import Masdar from "../../images/Partners/MASDAR.png";
import CivilDefense from "../../images/Partners/Civil-Defense.png";
import MalihaMunicipality from "../../images/Partners/Maliha-Municipality.png";
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
            We proudly collaborate with industry leaders who share our vision
            for excellence, bringing you an unparalleled festival experience.
          </Text>
        </div>

        {!isMobile ? (
          <Space
            direction="vertical"
            size="large"
            style={{ padding: "60px 0px", rowGap: "40px" }}
          >
            <div className="tire">
              <Text className="logo-title">Alchemy</Text>
              <Space size="large">
                <a
                  href="https://www.emaar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Emaar}
                    alt="icon"
                    style={{
                      height: "65px",
                      width: "100%",
                      paddingRight: "100px",
                    }}
                  />
                </a>
                <a
                  href="https://almarwangroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Marwan} alt="icon" style={{ height: "76px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Terra</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://arada.com/en/saro/?utm_source=Search_Google&utm_medium=cpc&utm_campaign=launcing_saro_masaar_phase_7&utm_content=UAE&utm_term=English&keyword__c=arada&network=g&campaignid=16972102965&adgroupid=141499173091&_device=c&gad_source=1&gbraid=0AAAAADAvvXkRgn31L2W9c-lknVBswkdOG&gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6Sw8y_LqZj14rXHHZL6C76phMiD7roqhD7ydZyAaYYD5KO0DaFmYy7kaAnF_EALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Arada} alt="icon" style={{ height: "43px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Ignis Plus</Text>
              <Space size="large">
                <a
                  href="https://tiger-properties.ae/?utm_term=tiger%20company%20dubai&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=4600842009&hsa_cam=21677395332&hsa_grp=169631334640&hsa_ad=712829782455&hsa_src=g&hsa_tgt=kwd-451664015646&hsa_kw=tiger%20company%20dubai&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gbraid=0AAAAACkmbRdcy-EulfnlhQxThudSA8M23&gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6SyXKvWFR5_Y1lVnbzYim71jhSOBkiAatfK74Ur7GWfXqp02dfilZMIaAtBxEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Tiger} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Ignis</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.investbank.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Invest}
                    alt="icon"
                    style={{ height: "80px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://asasproperties.ae/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Asas}
                    alt="icon"
                    style={{ height: "80px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://www.beeahgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Beeah}
                    alt="icon"
                    style={{ height: "61px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.du.ae/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DU}
                    alt="icon"
                    style={{ height: "50px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://portal.shjmun.gov.ae/en/Pages/Home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahMunicipality}
                    alt="icon"
                    style={{ height: "80px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://www.visitsharjah.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB_website_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahTourism}
                    alt="icon"
                    style={{ height: "80px" }}
                  />
                </a>
                <a
                  href="https://lp.srtip.ae/start-your-business/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SIRTIP} alt="icon" style={{ height: "80px" }} />
                </a>
                <a
                  href="https://masdarcity.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Masdar} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">AER</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.mohamedhilalgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MohamedHilal}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesPost}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://www.sharjahairport.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahAirport}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Aqua</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://hardcogroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HardcoBuilding}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Patron</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://thumbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Thumbay}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SEWA}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>

                <a
                  href="https://www.orienttravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={OrientTravel}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Value in Kind</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.shjpolice.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahPolice}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://sih.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahHeritage}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://www.shjcd.gov.ae/EN/pages/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={CivilDefense}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://www.sgmb.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SGMB}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.srta.gov.ae/ar-ae/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahRTA}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://shurooq.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Shurooq}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>

                <img
                  src={MalihaMunicipality}
                  alt="icon"
                  style={{ height: "82px", paddingRight: "50px" }}
                />
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Airline partner</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.emirates.com/in/english/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesAirline}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Hotel partners</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://holidayinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HolidayInternational}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://sheraton.marriott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Sheraton}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
                <a
                  href="https://www.hilton.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DoubleTree}
                    alt="icon"
                    style={{ height: "82px", paddingRight: "50px" }}
                  />
                </a>
              </Space>
            </div>
          </Space>
        ) : (
          <Space
            direction="vertical"
            size="large"
            style={{ padding: "60px 0px", rowGap: "40px" }}
          >
            <div className="tire">
              <Text className="logo-title">Alchemy</Text>
              <Space size="large">
                <a
                  href="https://www.emaar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Emaar}
                    alt="icon"
                    style={{
                      height: "65px",
                      width: "100%",
                    }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://almarwangroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Marwan} alt="icon" style={{ height: "76px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Terra</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://arada.com/en/saro/?utm_source=Search_Google&utm_medium=cpc&utm_campaign=launcing_saro_masaar_phase_7&utm_content=UAE&utm_term=English&keyword__c=arada&network=g&campaignid=16972102965&adgroupid=141499173091&_device=c&gad_source=1&gbraid=0AAAAADAvvXkRgn31L2W9c-lknVBswkdOG&gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6Sw8y_LqZj14rXHHZL6C76phMiD7roqhD7ydZyAaYYD5KO0DaFmYy7kaAnF_EALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Arada} alt="icon" style={{ height: "43px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Ignis Plus</Text>
              <Space size="large">
                <a
                  href="https://tiger-properties.ae/?utm_term=tiger%20company%20dubai&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=4600842009&hsa_cam=21677395332&hsa_grp=169631334640&hsa_ad=712829782455&hsa_src=g&hsa_tgt=kwd-451664015646&hsa_kw=tiger%20company%20dubai&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gbraid=0AAAAACkmbRdcy-EulfnlhQxThudSA8M23&gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6SyXKvWFR5_Y1lVnbzYim71jhSOBkiAatfK74Ur7GWfXqp02dfilZMIaAtBxEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Tiger} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Ignis</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.investbank.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Invest} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://asasproperties.ae/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Asas} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.beeahgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Beeah} alt="icon" style={{ height: "61px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.du.ae/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DU} alt="icon" style={{ height: "50px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://portal.shjmun.gov.ae/en/Pages/Home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahMunicipality}
                    alt="icon"
                    style={{ height: "80px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.visitsharjah.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB_website_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahTourism}
                    alt="icon"
                    style={{ height: "80px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://lp.srtip.ae/start-your-business/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SIRTIP} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://masdarcity.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Masdar} alt="icon" style={{ height: "80px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">AER</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.mohamedhilalgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MohamedHilal}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesPost}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.sharjahairport.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahAirport}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Aqua</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://hardcogroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HardcoBuilding}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Patron</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://thumbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumbay} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SEWA} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.orienttravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={OrientTravel}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Value in Kind</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.shjpolice.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahPolice}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://sih.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahHeritage}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
              <a
                href="https://www.shjcd.gov.ae/EN/pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CivilDefense} alt="icon" style={{ height: "82px" }} />
              </a>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.sgmb.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SGMB} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.srta.gov.ae/ar-ae/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SharjahRTA} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://shurooq.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Shurooq} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <img
                  src={MalihaMunicipality}
                  alt="icon"
                  style={{ height: "82px" }}
                />
              </Space>
            </div>

            <div className="tire">
              <Text className="logo-title">Airline partner</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.emirates.com/in/english/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesAirline}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Hotel partners</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://holidayinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HolidayInternational}
                    alt="icon"
                    style={{ height: "82px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://sheraton.marriott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sheraton} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.hilton.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DoubleTree} alt="icon" style={{ height: "82px" }} />
                </a>
              </Space>
            </div>
          </Space>
        )}
      </Content>
    </Layout>
  );
}

export default Partners;
