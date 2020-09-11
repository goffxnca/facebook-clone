import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessagePoster from "./MessagePoster";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* {StoryTail} */}

      <StoryReel />
      <MessagePoster />

      <Post
        profilePic="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/118767481_4981091458571454_8329671361549933117_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=ykbD8JLOpDgAX-9frcO&_nc_ht=scontent.fbkk12-3.fna&oh=ce090f178e53c8a9838812eee6550bdc&oe=5F7FED36"
        name="Jacky Lex"
        timestamp="2 minutes ago"
        image="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
        message="I want to go to this island it's looks cool!"
      />

      <Post
        profilePic="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/101798024_3122663904420377_4934010690141160074_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=TfWB2k1Pi40AX9DiJz3&_nc_ht=scontent.fbkk8-4.fna&oh=d2cd5553739d1453ca7b71834717a907&oe=5F80CF51"
        name="Zara Judge"
        timestamp="Now"
        image="https://cdn.pixabay.com/photo/2019/09/17/14/48/street-4483722_960_720.jpg"
        message="Amazing Vibe!!"
      />
    </div>
  );
}

export default Feed;
