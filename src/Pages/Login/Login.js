import React from "react";
import "./Login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    console.log(userName, password);
  };

  return (
    <div id="login-container">
      <div id="left-column"></div>
      <div id="branding">
        <h1>Login</h1>
      </div>
      <div id="login-form">
        <form method="post" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="enter mobile or email"
          />
          <p className="error show">Error message here</p>
          <input type="password" name="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
