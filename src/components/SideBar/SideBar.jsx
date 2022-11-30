import {
  CategoryOutlined,
  Inventory2Outlined,
  LineStyle,
  ListAltOutlined,
  PersonOutlineOutlined,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <div className="sidebar__title">Dashboard</div>
          <ul className="sidebar__list">
            <li className="sidebar__list--item active">
              <NavLink to="/">
                <LineStyle className="sidebar__icon" />
                Home
              </NavLink>
            </li>
            <li className="sidebar__list--item">
              <NavLink to="/analytics">
                <Timeline className="sidebar__icon" />
                Analytics
              </NavLink>
            </li>
            <li className="sidebar__list--item">
              <NavLink to="/sales">
                <TrendingUp className="sidebar__icon" />
                Sales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__title">Quick Menu</div>
          <ul className="sidebar__list">
            <li className="sidebar__list--item">
              <NavLink to="/user-list">
                <PersonOutlineOutlined className="sidebar__icon" />
                Users
              </NavLink>
            </li>
            <li className="sidebar__list--item">
              <NavLink to="/category-list">
                <CategoryOutlined className="sidebar__icon" />
                Categories
              </NavLink>
            </li>
            <li className="sidebar__list--item">
              <NavLink to="/product-list">
                <Inventory2Outlined className="sidebar__icon" />
                Products
              </NavLink>
            </li>
            <li className="sidebar__list--item">
              <NavLink to="/orders-list">
                <ListAltOutlined className="sidebar__icon" />
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
