import React from "react";
import Feed from "../Feed";
import Sidebar from "../Sidebar";
import Widgets from "../Widgets";
import "../../App.css";

const MainPage = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Scrollable Feed */}
      <Feed />
      {/* Right Side */}
      <Widgets />
    </div>
  );
};

export default MainPage;
