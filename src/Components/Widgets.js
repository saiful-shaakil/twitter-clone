import React from "react";
import "./Widgets.css";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-search" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget-container">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"1507447494799724565"} />
      </div>
    </div>
  );
};

export default Widgets;
