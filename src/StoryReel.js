import React, { useEffect, useState } from "react";
import "./StoryReel.css";
import Story from "./Story";
import db from "./firebase";

function StoryReel() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    db.collection("stories")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setStories(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="storyReel">
      {stories.map((story) => (
        <Story
          key={story.key}
          image={story.data.image}
          profileSrc={story.data.profileSrc}
          title={story.data.name}
        />
      ))}
    </div>
  );
}

export default StoryReel;
