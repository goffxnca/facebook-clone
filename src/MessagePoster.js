import React, { useState } from "react";
import "./MessagePoster.css";
import { Avatar, Button } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoIcon from "@material-ui/icons/Photo";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase";
import { useCustomState } from "./StateProvider";

function MessagePoster() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useCustomState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    // connect to db
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      name: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messagePoster">
      <div className="messagePoster_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind?"
            className="messagePoster_input"
          />
          <input
            placeholder="Image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Button type="submit" size="small" onClick={handleSubmit}>
            Post
          </Button>
        </form>
      </div>
      <div className="messagePoster_bottom">
        <div className="messagePoster_option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="messagePoster_option">
          <PhotoIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messagePoster_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessagePoster;
