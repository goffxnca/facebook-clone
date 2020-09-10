import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import MarketplaceIcon from "@material-ui/icons/Shop";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import AddBoxIcon from "@material-ui/icons/AddBox";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

function Sidebar() {
  return (
    <div>
      <SidebarRow
        src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/cp0/p86x86/92457991_124781502476020_3148313974039117824_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=kC4-wbiICKwAX81XeuZ&_nc_ht=scontent.fbkk8-2.fna&oh=1140e5aab5245f5f6b0c35a2b45714cd&oe=5F80B602"
        title="Goff Lee"
      />
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
