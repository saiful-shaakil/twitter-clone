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
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h4>
              {displayName}
              <span className="post-header-special">
                {verified && <VerifiedUser className="post-badge" />}@{userName}
              </span>{" "}
            </h4>
          </div>
          <div className="post-header-discription">
            <p>{text}</p>
          </div>
        </div>
        <img width="100%" src={image} alt="" />
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
