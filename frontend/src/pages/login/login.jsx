import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = () => {
  const [userSt, setUserSt] = useState({});
  const [popup, setPopup] = useState();
  const [submit, setSubmit] = useState(false);
  const [message, setMassage] = useState("");
  const navigate = useNavigate();
  const onFinish = async (e) => {
    setSubmit(true);
    try {
      e.preventDefault();
      const response = await axios.post("/api/user/login", userSt);
      console.log(response);
      if (response.data.success === true) {
        setPopup(true);
        setMassage(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        setPopup(false);
        setMassage(response.data.message);
      }
      // Navigate("/login"); ISTRAZI KAKO OVO????
    } catch (error) {
      e.preventDefault();
      console.log(error);
    }
  };
  return (
    <div id="login">
      <div className="popupParent">
        <div className="apsoluteDiv">
          {popup === false && submit === true ? (
            <div className="popup">
              <img src="wrong.png" alt="" />
              <h3>{message}</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
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
