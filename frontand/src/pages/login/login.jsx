import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const [userSt, setUserSt] = useState({});
  let user = { email: userSt.email, password: userSt.password };

  console.log(userSt);

  const onFinish = (e) => {
    e.preventDefault();
    setUserSt({ email: user.email, password: user.password });
  };
  return (
    <div id="login">
      <div className="formDiv">
        <div className="niceToMeetDiv">
          <h2>Dobro došli</h2>
        </div>
        <form onSubmit={onFinish}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              user.email = e.target.value;
            }}
          />
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              user.password = e.target.value;
            }}
          />
          <input type="submit" value="Prijavi se" className="RegisterButton" />
          <div className="link">
            <Link to="/register">Kliknite za registrovanje</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
