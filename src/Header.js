import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import ExpandMore from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://seeklogo.com/images/F/facebook-new-2019-logo-5A4671100B-seeklogo.com.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionOutlinedIcon fontSize="large" />
        </div>

        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-1/cp0/p86x86/92457991_124781502476020_3148313974039117824_o.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=kC4-wbiICKwAX81XeuZ&_nc_ht=scontent.fbkk8-2.fna&oh=1140e5aab5245f5f6b0c35a2b45714cd&oe=5F80B602" />
          <h4>Goff Lee</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
