import React, { useState } from "react";
import "./Users.css";
import user1 from "./../../assets/images/user1.png";
import trash from "./../../assets/images/trash.png";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const { isLoading, error, data, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/api/v1/users").then((res) => res.json())
  );

  // Handle Delete User
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/v1/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        refetch();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Handle Form Submit
  const handleUserSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const password = e.target.password.value;
    const avatar = e.target.avatar.files[0];

    //  Sending Form Data
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    fetch("http://localhost:5000/api/v1/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        refetch();
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="manageUser-container">
        <div id="title">
          <h2>Manage Users</h2>
        </div>

        <div className="new-message-container new-user">
          <Link to="/users" onClick={() => setShowModal(true)}>
            +
          </Link>
        </div>

        <div id="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody id="users-table">
              {data.data.users.map((val) => (
                <tr key={val._id}>
                  <td className="name">
                    <img src={val.imgURL} alt="trash" />
                    <span>{val.name}</span>
                  </td>
                  <td>{val.email}</td>
                  <td onClick={() => handleDelete(val._id)} className="manage">
                    <img src={trash} alt="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Modal */}
      {showModal && (
        <div className="modal-wrapper" id="add-user-modal">
          <div className="modal">
            <Link
              to="/users"
              onClick={() => setShowModal(false)}
              className="modal-close"
            >
              +
            </Link>
            <div className="modal-title">
              <h2>Create New User</h2>
            </div>
            <div onSubmit={handleUserSubmit} className="modal-body">
              <form id="add-user-form">
                <input type="text" placeholder="enter name" name="name" />
                <p className="error show">This is error</p>
                <input type="text" placeholder="enter email" name="email" />
                <input type="text" placeholder="enter mobile" name="mobile" />
                <input
                  type="password"
                  placeholder="enter password"
                  name="password"
                />
                <input type="file" name="avatar" accept=".jpg, .jpeg, .png" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
