import { Typography } from "antd";
const { Text } = Typography;

function ProgramList({ data }) {
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
              <Text className="name">{item.name}</Text>
              <Text className="time">{item.time}</Text>
              {item.image && (
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