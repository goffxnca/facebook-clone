import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story_avatar" src={profileSrc} />
      <span>{title}</span>
    </div>
  );
}
export default Story;
