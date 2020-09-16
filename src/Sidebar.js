import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import AddBoxIcon from "@material-ui/icons/AddBox";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { useCustomState } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useCustomState();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={AddBoxIcon} title="Covid19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messager" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={KeyboardArrowDown} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
