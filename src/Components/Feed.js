import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h3>Home</h3>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Feed */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
