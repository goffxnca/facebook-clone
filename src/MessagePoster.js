import React, { useState } from "react";
import "./MessagePoster.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoIcon from "@material-ui/icons/Photo";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";

function MessagePoster() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // connect to db

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messagePoster">
      <div className="messagePoster_top">
        <Avatar src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/cp0/p86x86/92457991_124781502476020_3148313974039117824_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=kC4-wbiICKwAX81XeuZ&_nc_ht=scontent.fbkk8-2.fna&oh=1140e5aab5245f5f6b0c35a2b45714cd&oe=5F80B602" />
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
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="messagePoster_bottom">
        <div className="messagePoster_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagePoster_option">
          <PhotoIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagePoster_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessagePoster;