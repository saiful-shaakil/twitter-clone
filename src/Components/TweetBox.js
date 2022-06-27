import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweeBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://twitter.com/saiful_shaakil/photo"></Avatar>
          <input type="text" placeholder="Whats on your mind?" />
        </div>
        <Button className="tweet-button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
