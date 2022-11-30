import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";

function TopBar(props) {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar__left">
          <div className="topbar__logo">
            <Link to="/">Tiki Admin</Link>
          </div>
        </div>
        <div className="topbar__right">
          <div className="topbar__icon">
            <NotificationsNone />
            <span className="topbar__icon--bag">2</span>
          </div>
          <div className="topbar__icon">
            <Language />
            <span className="topbar__icon--bag">2</span>
          </div>
          <div className="topbar__icon">
            <Settings />
            <span className="topbar__icon--bag">2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/12938820/pexels-photo-12938820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            className="topbar__avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
