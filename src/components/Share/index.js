import React from "react";
import { message, Button } from "antd";
import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Helmet } from "react-helmet";
import { CopyOutlined } from "@ant-design/icons";

const ShareContent = ({ url, title, imageUrl }) => {
  const copyLink = () => {
    window.navigator.clipboard.writeText(window.location.href);
    message.info("Linked Copied!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Amazing content to share!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={imageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterShareButton url={url} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={imageUrl} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <div>
        <Button type="primary" icon={<CopyOutlined />} onClick={copyLink} />
      </div>
    </div>
  );
};

export default ShareContent;
