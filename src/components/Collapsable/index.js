import React, { useState } from "react";
import { Typography } from "antd";

import "./Collapsible.css";

const { Text } = Typography;

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={toggle}
      >
        <Text className="collapsible-header">{title}</Text>
        {isOpen ? (
          <Text className="close">x</Text>
        ) : (
          <Text className="expand">+</Text>
        )}
      </div>
      <div
        className={`collapsible-content ${isOpen ? "open" : ""}`}
        style={{ maxHeight: isOpen ? "1000px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
