import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";
import { dataUsers } from "../../dataUsers";
import "./userList.scss";

function UserList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("ok");
    (async () => {
      try {
        const data = await userApi.getUserList();
        setData(data);
      } catch (err) {
        console.log("Failed to fetch user list: ", err);
      }
    })();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList__user">
            <img
              className="userList__avatar"
              src={params.row.avatarUrl}
              alt="Avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volumn",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user-detail/" + params.row._id}>
              <button className="userList__edit">Edit</button>
            </Link>
            <DeleteOutline
              className="userList__delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default UserList;
