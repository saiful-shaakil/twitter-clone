import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";

export const Post = forwardRef(
  ({ displayName, userName, text, image, verified, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-header-text">
              <h4>
                {displayName}
                <span className="post-header-special">
                  {verified && <VerifiedUser className="post-badge" />}@
                  {userName}
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
  }
);
