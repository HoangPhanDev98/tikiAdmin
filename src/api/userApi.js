import axiosClient from "./axiosClient";

const userApi = {
  getUserList(params) {
    const url = "/users";
    return axiosClient.get(url, params);
  },

  add(data) {
    const url = "/users";
    return axiosClient.post(url, data);
  },
};

export default userApi;
