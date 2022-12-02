import React, { useState } from "react";
import userApi from "../../../api/userApi";
import "./userCreate.scss";

UserCreate.propTypes = {};

function UserCreate(props) {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    gender: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userApi.add({
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        password: data.password,
        address: data.address,
        gender: data.gender,
        status: data.status,
      });

      console.log("ok");
    } catch (err) {
      console.log("Fail to add new user: ", err);
    }
  };

  return (
    <div className="userCreate">
      <h1 className="userCreate__title">Tạo mới thành viên</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="userCreate__form">
        <div className="userCreate__item">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            id="username"
            onChange={(e) => handleInputChange(e)}
            value={data.username}
            type="text"
            placeholder="hoangphandev98"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="fullname">Họ và tên</label>
          <input
            id="fullname"
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Phan Thanh Hoàng"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => handleInputChange(e)}
            id="email"
            value={data.email}
            type="text"
            placeholder="hoangphandev98@gmail.com"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Số điện thoại</label>
          <input
            onChange={(e) => handleInputChange(e)}
            id="phone"
            value={data.phone}
            type="text"
            placeholder="0379239222"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Mật khẩu</label>
          <input
            onChange={(e) => handleInputChange(e)}
            id="password"
            value={data.password}
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Địa chỉ</label>
          <input
            onChange={(e) => handleInputChange(e)}
            id="address"
            value={data.address}
            type="text"
            placeholder="Ho Chi Minh City"
          />
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Giới tính</label>
          <div className="userCreate__gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Nam</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Nữ</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Khác</label>
          </div>
        </div>
        <div className="userCreate__item">
          <label htmlFor="">Trạng thái</label>
          <select className="userCreate__status" name="status" id="status">
            <option value="active">Đã kích hoạt</option>
            <option value="inactive">Chưa kích hoạt</option>
          </select>
        </div>
        <button type="submit" className="userCreate__button">
          Tạo tài khoản
        </button>
      </form>
    </div>
  );
}

export default UserCreate;
