import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

function Post({ profilePic, name, timestamp, image, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} />
        <div className="post_top_info">
          <h3>{name}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbUpAltOutlined />
          <span>Like</span>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <span>Comment</span>
        </div>
        <div className="post_option">
          <NearMe />
          <span>Share</span>
        </div>
        <div className="post_option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
