import { Typography } from "antd";
import "./button.css";

const { Text } = Typography;

function ButtonComponent({ text, clickAction, bgColor, textColor }) {
  return (
    <Text style={{backgroundColor: bgColor, color: textColor}} className="customised-button" onClick={clickAction}>
      {text}
    </Text>
  );
}

export default ButtonComponent;
