import { Visibility } from "@mui/icons-material";
import React from "react";
import "./widgetSm.scss";

function WidgetSm(props) {
  return (
    <div className="widgetSm">
      <span className="widgetSm__title">New Join Members</span>
      <ul className="widgetSm__list">
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__list--item">
          <img
            className="widgetSm__avatar"
            src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar"
          />
          <div className="widgetSm__user">
            <span className="widgetSm__user--name">Anna Keller</span>
            <span className="widgetSm__user--title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
