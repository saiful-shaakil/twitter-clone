import {
  CalendarToday,
  Collections,
  Gif,
  LocationCity,
  LocationOn,
  Poll,
  SentimentSatisfied,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase";
import { colRef } from "./firebase";
import "./TweeBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [user, loading] = useAuthState(auth);

  const upload = () => {
    document.getElementById("selectImage").click();
  };
  const postTweet = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      displayName: user?.displayName,
      userName: `${user?.displayName
        ?.replace(/\s/g, "")
        .toLowerCase()
        .slice(0, 6)}`,
      verified: true,
      avatar: user?.photoURL,
      text: tweetMessage,
      image:
        "https://media4.giphy.com/media/MNa0HKdhc3SGQ/giphy.gif?cid=ecf05e47fkxziivb60gsjxkt3eu21kp8oepajuchkljg4qlv&rid=giphy.gif&ct=g",
    });
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox-input">
          <Avatar src={user?.photoURL}></Avatar>
          <input
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            id="name"
            required
            placeholder="What's happening?"
          />
        </div>
        <div className="icons-section">
          <div className="icons">
            <Collections id="plus" onClick={upload} />
            <input
              type="file"
              id="selectImage"
              onchange="postTweet()"
              accept="image/*"
              hidden
            />
            <Gif />
            <Poll />
            <SentimentSatisfied />
            <CalendarToday />
            <LocationOn />
          </div>
          <Button onClick={postTweet} type="submit" className="tweet-button">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
