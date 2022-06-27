import {
  Twitter,
  Home,
  NotificationsNone,
  Search,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOption active Icon={<Twitter />} text="" />
      <SidebarOption active Icon={<Home />} text="Home" />
      <SidebarOption Icon={<Search />} text="Explore" />
      <SidebarOption Icon={<NotificationsNone />} text="Notifications" />
      <SidebarOption Icon={<MailOutline />} text="Messages" />
      <SidebarOption Icon={<BookmarkBorder />} text="Bookmarks" />
      <SidebarOption Icon={<ListAlt />} text="Lists" />
      <SidebarOption Icon={<PermIdentity />} text="Profile" />
      <SidebarOption Icon={<MoreHoriz />} text="More" />

      <Button variant="outlined" className="sidebar-tweet">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
