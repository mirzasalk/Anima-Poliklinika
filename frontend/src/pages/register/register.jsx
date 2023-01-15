import React from "react";
import "./register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userState, setUserState] = useState({});
  const [popup, setPopup] = useState();
  const [submit, setSubmit] = useState(false);

  const onFinish = async (e) => {
    setSubmit(true);
    // const Navigate = useNavigate(); ISTRAZI
    try {
      e.preventDefault();
      const response = await axios.post("/api/user/register", userState);
      console.log(response);
      if (response.data.success === true) {
        setPopup(true);
      } else {
        setPopup(false);
      }
      // Navigate("/login"); ISTRAZI KAKO OVO????
    } catch (error) {
      e.preventDefault();
      console.log(error);
    }
  };

  return (
    <div id="register">
      <div className="popupParent">
        <div className="apsoluteDiv">
          {popup === true && submit === true ? (
            <div className="popup">
              <img src="tacno.png" alt="" />
              <h3>User successifuly created</h3>
            </div>
          ) : popup === false && submit === true ? (
            <div className="popup">
              <img src="wrong.png" alt="" />
              <h3>User already exists</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Link className="backToHomeBtn" to="/">
        <img src="home-icon.png" alt="home" />
      </Link>
      <div className="homeDiv"></div>

      <div className="divZaRazdvanjanje">
        <div className="formDiv">
          <div className="niceToMeetDiv">
            <h2>Dobro došli</h2>
          </div>
          <form
            onSubmit={(e) => {
              onFinish(e);
            }}
          >
            <label htmlFor="fname">Ime</label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => {
                setUserState({ ...userState, fname: e.target.value });
              }}
            />
            <label htmlFor="lname">Prezime</label>
            <input
              type="text"
              id="lname"
              name="fname"
              onChange={(e) => {
                setUserState({ ...userState, lname: e.target.value });
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setUserState({ ...userState, email: e.target.value });
              }}
            />
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setUserState({ ...userState, password: e.target.value });
              }}
            />
            <input
              type="submit"
              value="Registruje se"
              className="RegisterButton"
            />
            <div className="link">
              <Link className="switchToLoginLink" to="/login">
                Kliknite za logovanje
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
