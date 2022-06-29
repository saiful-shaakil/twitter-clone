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
  const imgbbKey = "a6f2cc718c0eea45cff3de7842947fd3";

  const upload = () => {
    document.getElementById("selectImage").click();
  };
  const postTweet = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    const image = e.target.form.selectImage.files[0];
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageLink = data?.data?.url;
        addDoc(colRef, {
          displayName: user?.displayName,
          userName: `${user?.displayName
            ?.replace(/\s/g, "")
            .toLowerCase()
            .slice(0, 6)}`,
          verified: true,
          avatar: user?.photoURL,
          text: tweetMessage,
          image: imageLink,
        });
        setTweetMessage("");
      });
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
