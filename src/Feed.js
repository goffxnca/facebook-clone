import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessagePoster from "./MessagePoster";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessagePoster />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          name={post.data.name}
          timestamp={post.data.timestamp}
          image={post.data.image}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Feed;
