import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebar-option">
      {Icon}
      {text}
    </div>
  );
};

export default SidebarOption;
