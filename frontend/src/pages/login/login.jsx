import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const [userSt, setUserSt] = useState({});

  console.log(userSt);

  const onFinish = (e) => {
    e.preventDefault();
  };
  return (
    <div id="login">
      {userSt.email} <br />
      {userSt.password}
      <div className="homeDiv">
        <Link className="backToHomeBtn" to="/">
          <img src="home-icon.png" alt="home" />
        </Link>
      </div>
      <div className="divZaRazdvanjanje">
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
                setUserSt({ ...userSt, email: e.target.value });
              }}
            />
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setUserSt({ ...userSt, password: e.target.value });
              }}
            />
            <input
              type="submit"
              value="Prijavi se"
              className="RegisterButton"
            />
            <div className="link">
              <Link className="switchToRegisterLink" to="/register">
                Kliknite za registrovanje
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
