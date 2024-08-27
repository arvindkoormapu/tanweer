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

  const encodedMessage = encodeURIComponent(`${title} - ${"description"}`);
  const encodedUrl = encodeURIComponent(url);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}%20${encodedUrl}`;

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Amazing content to share!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <TwitterShareButton url={url} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <div>
        <Button type="primary" icon={<CopyOutlined />} onClick={copyLink} />
      </div> */}
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={"description"} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        {/* <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt="Preview" /> */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Share on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ShareContent;
