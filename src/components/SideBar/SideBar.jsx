import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";
import React from "react";
import "./sidebar.scss";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <div className="sidebar__title">Dashboard</div>
          <ul className="sidebar__list">
            <li className="sidebar__list--item active">
              <LineStyle className="sidebar__icon" />
              Home
            </li>
            <li className="sidebar__list--item">
              <Timeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__list--item">
              <TrendingUp className="sidebar__icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__title">Dashboard</div>
          <ul className="sidebar__list">
            <li className="sidebar__list--item">
              <LineStyle className="sidebar__icon" />
              Home
            </li>
            <li className="sidebar__list--item">
              <Timeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__list--item">
              <TrendingUp className="sidebar__icon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
