import { Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

function ProgramList({ data }) {
  const [showImage, setShowImage] = useState(-1);
  return (
    <div>
      {data.map((elm, index) => (
        <div className="area-wrapper">
          <Text className="title">{elm.title}</Text>
          {elm.list.map((item, i) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "4px 0px",
              }}
            >
              <Text
                className="name"
                style={{ cursor: "pointer" }}
                onClick={() => setShowImage(i)}
              >
                {item.name}
              </Text>
              <Text className="time">{item.time}</Text>
              {showImage === i && (
                <img
                  rel="preload"
                  src={require(`../../${item.image}`)}
                  alt="Rotating Circle"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProgramList;
