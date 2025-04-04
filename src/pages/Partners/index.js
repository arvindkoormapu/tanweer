import React from "react";
import { Layout, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import { useData } from "../../hooks/useData";
import Emaar from "../../images/Partners/EMAAR.png";
import Marwan from "../../images/Partners/AL MARWAN.png";
import Arada from "../../images/Partners/ARADA.png";
import Tiger from "../../images/Partners/TIGER.png";
import Asas from "../../images/Partners/ASAS.png";
import Invest from "../../images/Partners/Invest-Bank.png";
import Beeah from "../../images/Partners/BEEAH.png";
import DU from "../../images/Partners/du.png";
import Thumbay from "../../images/Partners/THUMBAY.png";
import SEWA from "../../images/Partners/SEWA.png";
import OrientTravel from "../../images/Partners/OrientTravel.png";
import MohamedHilal from "../../images/Partners/Mohammad Hilal.png";
import EmiratesPost from "../../images/Partners/7X.png";
import SharjahMunicipality from "../../images/Partners/Sharjah Municipality.png";
import SharjahAirport from "../../images/Partners/Sharjah Airport.png";
import SharjahTourism from "../../images/Partners/SCTDA.png";
import HardcoBuilding from "../../images/Partners/HARDCO.png";
import SharjahPolice from "../../images/Partners/Sharjah Police.png";
import SharjahHeritage from "../../images/Partners/SIH.png";
import SGMB from "../../images/Partners/SGMB_B.png";
import SharjahRTA from "../../images/Partners/Sharjah RTA.png";
import Shurooq from "../../images/Partners/Shurooq.png";
import EmiratesAirline from "../../images/Partners/Emirates.png";
import HolidayInternational from "../../images/Partners/Hotel-Holiday-International.png";
import Sheraton from "../../images/Partners/Sheraton.png";
import DoubleTree from "../../images/Partners/SHJAW_DUAL_BLUE_RGB.png";
import SIRTIP from "../../images/Partners/SIRTIP.png";
import Masdar from "../../images/Partners/MASDAR.png";
import CivilDefense from "../../images/Partners/Civil Defense.png";
import MalihaMunicipality from "../../images/Partners/Maliha-Municipality.png";
import SharjahBroadcastingAuthority from "../../images/Partners/Sharjah-Broadcasting-Authority.png"
import Mishmashi from "../../images/Partners/Maison-Mishmashi.png"
import BARJEEL from "../../images/Partners/BARJEEL.png"
import Zulal from "../../images/Partners/Zulal.png"
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
      {/* <div
        className="floating-button"
        onClick={() =>
          window.open("https://experience.tanweerfestival.com/", "_blank")
        }
      >
        get passes NOW
      </div> */}
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
                      height: "200px",
                    }}
                  />
                </a>
                <a
                  href="https://almarwangroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Marwan} alt="icon" style={{ height: "200px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Terra</Text>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://arada.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Arada}
                    alt="icon"
                    style={{
                      height: "200px",
                    }}
                  />
                </a>
                <a
                  href="https://shurooq.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Shurooq} alt="icon" style={{ height: "200px" }} />
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
                  <img src={Tiger} alt="icon" style={{ height: "150px" }} />
                </a>
                <a
                  href="https://www.du.ae/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DU} alt="icon" style={{ height: "150px" }} />
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
                  <img src={Invest} alt="icon" style={{ height: "150px" }} />
                </a>

                <a
                  href="https://asasproperties.ae/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Asas} alt="icon" style={{ height: "150px" }} />
                </a>

                <a
                  href="https://www.beeahgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Beeah} alt="icon" style={{ height: "150px" }} />
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
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://srtip.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SIRTIP} alt="icon" style={{ height: "150px" }} />
                </a>
                <a
                  href="https://masdar.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Masdar} alt="icon" style={{ height: "150px" }} />
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
                    style={{ height: "150px" }}
                  />
                </a>

                <a
                  href="https://www.7x.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesPost}
                    alt="icon"
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
                  />
                </a>
                <a
                  href="https://www.barjeelartfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={BARJEEL}
                    alt="icon"
                    style={{ height: "150px" }}
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
                  <img src={Thumbay} alt="icon" style={{ height: "150px" }} />
                </a>

                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SEWA} alt="icon" style={{ height: "150px" }} />
                </a>

                <a
                  href="https://www.orienttravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={OrientTravel}
                    alt="icon"
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
                  />
                </a>
                <a
                  href="https://www.sgmb.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SGMB} alt="icon" style={{ height: "150px" }} />
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
                    style={{ height: "150px" }}
                  />
                </a>

                <a
                  href="https://malihamun.shj.ae/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MalihaMunicipality}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>

                <a
                  href="https://www.sba.net.ae/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahBroadcastingAuthority}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
                <a
                  href="https://mishmashi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Mishmashi} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large" style={{ padding: "10px 0px" }}>
                <a
                  href="https://www.zulal.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Zulal}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
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
                    style={{ height: "150px" }}
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
                    style={{ height: "150px" }}
                  />
                </a>
                <a
                  href="https://sheraton.marriott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sheraton} alt="icon" style={{ height: "150px" }} />
                </a>
                <a
                  href="https://www.hilton.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DoubleTree}
                    alt="icon"
                    style={{ height: "150px" }}
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
                      height: "150px",
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
                  <img src={Marwan} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Terra</Text>
              <Space size="large">
                <a
                  href="https://arada.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Arada} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://shurooq.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Shurooq} alt="icon" style={{ height: "150px" }} />
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
                  <img src={Tiger} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.du.ae/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DU} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Ignis</Text>
              <Space size="large">
                <a
                  href="https://www.investbank.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Invest} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://asasproperties.ae/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Asas} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.beeahgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Beeah} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              
              <Space size="large">
                <a
                  href="https://portal.shjmun.gov.ae/en/Pages/Home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahMunicipality}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.visitsharjah.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB_website_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahTourism}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://srtip.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SIRTIP} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://masdar.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Masdar} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              
            </div>
            <div className="tire">
              <Text className="logo-title">AER</Text>
              <Space size="large">
                <a
                  href="https://www.mohamedhilalgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MohamedHilal}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.7x.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesPost}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.sharjahairport.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahAirport}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Aqua</Text>
              <Space size="large">
                <a
                  href="https://hardcogroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HardcoBuilding}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.barjeelartfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={BARJEEL}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Patron</Text>
              <Space size="large">
                <a
                  href="https://thumbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Thumbay} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.sewa.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SEWA} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.orienttravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={OrientTravel}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Value in Kind</Text>
              <Space size="large">
                <a
                  href="https://www.shjpolice.gov.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahPolice}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://sih.gov.ae/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahHeritage}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <a
                href="https://www.shjcd.gov.ae/EN/pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={CivilDefense}
                  alt="icon"
                  style={{ height: "150px" }}
                />
              </a>
              <Space size="large">
                <a
                  href="https://www.sgmb.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SGMB} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.srta.gov.ae/ar-ae/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahRTA}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://malihamun.shj.ae/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MalihaMunicipality}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.sba.net.ae/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SharjahBroadcastingAuthority}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://mishmashi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Mishmashi} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.zulal.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Zulal} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
            </div>

            <div className="tire">
              <Text className="logo-title">Airline partner</Text>
              <Space size="large">
                <a
                  href="https://www.emirates.com/in/english/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={EmiratesAirline}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
            </div>
            <div className="tire">
              <Text className="logo-title">Hotel partners</Text>
              <Space size="large">
                <a
                  href="https://holidayinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HolidayInternational}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://sheraton.marriott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Sheraton} alt="icon" style={{ height: "150px" }} />
                </a>
              </Space>
              <Space size="large">
                <a
                  href="https://www.hilton.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DoubleTree}
                    alt="icon"
                    style={{ height: "150px" }}
                  />
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
