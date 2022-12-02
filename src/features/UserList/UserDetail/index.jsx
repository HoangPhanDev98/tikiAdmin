import {
  CalendarToday,
  LocationCityOutlined,
  MailOutline,
  PermIdentity,
  PhoneIphoneOutlined,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./userDetail.scss";

UserDetail.propTypes = {};

function UserDetail(props) {
  return (
    <div className="userDetail">
      <div className="userDetail__title">
        <h1>Edit User</h1>
        <Link to="/user-create">
          <button className="userDetail__addButton">Create New User</button>
        </Link>
      </div>

      <div className="userDetail__desc">
        <div className="userDetail__show">
          <div className="userDetail__showTop">
            <img
              src="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Avatar"
            />
            <div className="userDetail__showTop-title">
              <p>Hoang Phan</p>
              <p>FullStack Developer</p>
            </div>
          </div>
          <div className="userDetail__showBottom">
            <h3>Account Details</h3>
            <div className="userDetail__showInfo">
              <PermIdentity className="userDetail__showInfo-icon" />
              <span className="userDetail__showInfo-title">hoangphandev98</span>
            </div>
            <div className="userDetail__showInfo">
              <CalendarToday className="userDetail__showInfo-icon" />
              <span className="userDetail__showInfo-title">20/11/1998</span>
            </div>
            <h3>Contact Details</h3>

            <div className="userDetail__showInfo">
              <PhoneIphoneOutlined className="userDetail__showInfo-icon" />
              <span className="userDetail__showInfo-title">0379239222</span>
            </div>
            <div className="userDetail__showInfo">
              <MailOutline className="userDetail__showInfo-icon" />
              <span className="userDetail__showInfo-title">
                hoangphandev98@gmail.com
              </span>
            </div>
            <div className="userDetail__showInfo">
              <LocationCityOutlined className="userDetail__showInfo-icon" />
              <span className="userDetail__showInfo-title">
                Ho Chi Minh City
              </span>
            </div>
          </div>
        </div>
        <div className="userDetail__update">
          <h3>Edit</h3>

          <form className="userDetail__updateForm">
            <div className="updateForm__left">
              <div className="updateForm__item">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="hoangphandev98"
                  className="updateForm__input"
                />
              </div>
              <div className="updateForm__item">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Hoang Phan"
                  className="updateForm__input"
                />
              </div>
              <div className="updateForm__item">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="hoangphandev98@gmail.com"
                  className="updateForm__input"
                />
              </div>
              <div className="updateForm__item">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="0379239222"
                  className="updateForm__input"
                />
              </div>
              <div className="updateForm__item">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Ho Chi Minh City"
                  className="updateForm__input"
                />
              </div>
            </div>
            <div className="updateForm__right">
              <div className="updateForm__upload">
                <img
                  src="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Avatar"
                  className="updateForm__img"
                />
                <label htmlFor="updateForm__upload-img">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="updateForm__upload-img"
                  style={{ display: "none" }}
                />
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
