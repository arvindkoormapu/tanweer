import React, { useState } from "react";
import { Row, Col, Typography, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import PatternIcon from "../../images/Pattern_Icon.png";
import headerLogo from "../../images/logo_dark.png";
import HamburguerMenu from "../../images/hamburguer menu.png";
import { useData } from "../../hooks/useData";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const { Text } = Typography;

const Header = ({ onMenuClick }) => {
  const { pages } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const [visibleSubMenu, setVisibleSubMenu] = useState(null);

  const redirect = (link) => {
    if (link === "/festival_passes") {
      window.location.href = "https://experience.tanweerfestival.com";
    } else navigate(link);
  };

  const handleMouseEnter = (index) => {
    setVisibleSubMenu(index);
  };

  const handleMouseLeave = () => {
    setVisibleSubMenu(null);
  };

  return (
    <Row style={{ flexDirection: "column" }}>
      <Col className="top-header">
        <Space className="space">
          <img src={PatternIcon} alt="icon" className="pattern" />
          <Text className="text">{pages.header.top_section.text}</Text>
          <img src={PatternIcon} alt="icon" className="pattern" />
          <Text className="text">{pages.header.top_section.date}</Text>
          <img src={PatternIcon} alt="icon" className="pattern" />
          {!isMobile && (
            <>
              <Text className="text">{pages.header.top_section.text}</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
              <Text className="text">{pages.header.top_section.date}</Text>
              <img src={PatternIcon} alt="icon" className="pattern" />
            </>
          )}
        </Space>
      </Col>
      <Col className="logo-section">
        <Row justify="space-between" align="middle" className="header-wrapper">
          <Col>
            <div className="logo-wrapper">
              <img
                src={headerLogo}
                alt="Header Logo"
                className="header-logo"
                onClick={() => redirect("/home")}
              />
            </div>
          </Col>
          <Col>
            {isMobile ? (
              <img
                src={HamburguerMenu}
                alt="Header Logo"
                style={{ width: "30px", height: "18px" }}
                onClick={onMenuClick}
              />
            ) : (
              <Space className="menu-links-header">
                {pages.header.links.map((elm, i) => (
                  <div
                    className={`menu-item ${
                      location.pathname === elm.link ? "active-menu" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Text
                      className={`links `}
                      onClick={() => redirect(elm.link)}
                    >
                      {elm.title}
                    </Text>
                    {visibleSubMenu === i &&
                      elm["sub-menu"] &&
                      elm["sub-menu"].length > 0 && (
                        <div className="sub-menu">
                          {elm["sub-menu"].map((subElm) => (
                            <Text
                              className={`sub-link ${
                                location.pathname === subElm.link
                                  ? "active-sub-menu"
                                  : ""
                              }`}
                              onClick={() => redirect(subElm.link)}
                            >
                              {subElm.title}
                            </Text>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </Space>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
