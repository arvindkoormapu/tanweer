import React from "react";
import { Drawer, Space, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useData } from "../../hooks/useData";
import CloseButton from "../../images/Close Button.png";

import "./drawer.css";
const { Text } = Typography;

const FullPageDrawer = ({ isVisible, onClose }) => {
  const { pages } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Drawer
        placement="right"
        closable={false}
        visible={isVisible}
        bodyStyle={{ padding: 0 }}
        className="full-page-drawer"
        width="100%"
      >
        <Space direction="vertical" className="menu-links">
          <img
            onClick={onClose}
            src={CloseButton}
            alt="icon"
            className="close-button-image"
          />
          {pages.header.links.map((elm, i) => (
            <Text
              className={`links ${
                location.pathname === elm.link ? "active-menu" : ""
              }`}
              onClick={() => {
                navigate(elm.link);
                onClose();
              }}
            >
              {elm.title}
            </Text>
          ))}
        </Space>
      </Drawer>
    </div>
  );
};

export default FullPageDrawer;
