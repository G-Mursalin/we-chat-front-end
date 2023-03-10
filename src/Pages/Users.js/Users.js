import React from "react";
import "./Users.css";
import user1 from "./../../assets/images/user1.png";
import trash from "./../../assets/images/trash.png";

const Users = () => {
  return (
    <div className="manageUser-container">
      <div id="title">
        <h2>Manage Users</h2>
      </div>

      <div className="new-message-container new-user">
        <a href="#">+</a>
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
            <tr id="">
              <td className="name">
                <img src={user1} alt="trash" />
                <span>User 1</span>
              </td>
              <td>email@email.com</td>
              <td className="manage">
                <img src={trash} alt="Delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
