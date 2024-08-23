import React from "react";
import { Popover, Button } from "antd";
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareComponent = ({ url, title, description }) => {
  const content = (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* Twitter Share Button */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );

  return (
    <Popover
      content={content}
      title="Share this page"
      trigger="click"
      placement="bottom"
    >
      <Button type="primary" icon={<i className="fas fa-share-alt" />} />
    </Popover>
  );
};

export default ShareComponent;
