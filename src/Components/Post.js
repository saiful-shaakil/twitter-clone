import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

const Post = ({ displayName, userName, text, image, verified, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h4>
              Moonsoor Ali{" "}
              <span className="post-header-special">
                <VerifiedUser className="post-badge" />
                @moonsoor
              </span>{" "}
            </h4>
          </div>
          <div className="post-header-discription">
            <p>Lets make something good</p>
          </div>
        </div>
        <img
          width="100%"
          src="https://media2.giphy.com/media/xUNd9FOSgUDmfVZ78I/200.webp?cid=ecf05e47pvyhx3qrj6pdxpvwwjjritdg4jkqzlz4h08c2jnx&rid=200.webp&ct=g"
          alt=""
        />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
