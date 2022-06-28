import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import { colRef } from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, [posts]);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h3>Home</h3>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Feed */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
