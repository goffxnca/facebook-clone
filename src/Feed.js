import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessagePoster from "./MessagePoster";

function Feed() {
  return (
    <div className="feed">
      {/* {StoryTail} */}

      <StoryReel />
      <MessagePoster />
    </div>
  );
}

export default Feed;
