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

  const InstagramShare = ({ url, title, image }) => {
    const shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(image)}`;
    
  
    return (
      <div>
        {/* Other share buttons */}
        <a 
          href={shareUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>
      </div>
    );
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
      <TwitterShareButton url={url} title={title + " \n " + imageUrl + " \n"}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title + " \n " + imageUrl + " \n"}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <InstagramShare url={url} title={title} image={imageUrl} />
      <div>
        <Button type="primary" icon={<CopyOutlined />} onClick={copyLink} />
      </div>
    </div>
  );
};

export default ShareContent;
