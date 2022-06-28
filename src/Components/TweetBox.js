import { Avatar, Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import db, { colRef } from "./firebase";
import "./TweeBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const postTweet = (e) => {
    e.preventDefault();
    if (tweetMessage) {
      addDoc(colRef, {
        displayName: "Yoonsoon Yoori",
        userName: "younsoon",
        verified: true,
        avatar:
          "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: tweetMessage,
        image:
          "https://media0.giphy.com/media/Hsvflq4srEfZQzxPan/giphy.gif?cid=ecf05e4777ynnzrw688r9vzbxzqlve9ws2g9tehpkeohm9m4&rid=giphy.gif&ct=g",
      });
      setTweetMessage("");
    }
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://twitter.com/saiful_shaakil/photo"></Avatar>
          <input
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats on your mind?"
          />
        </div>
        <Button onClick={postTweet} type="submit" className="tweet-button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
