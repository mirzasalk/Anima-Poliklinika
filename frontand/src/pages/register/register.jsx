import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [userSt, setUserSt] = useState({});
  let user = {
    ime: userSt.ime,
    prezime: userSt.prezime,
    email: userSt.email,
    password: userSt.password,
  };

  const handleValues = async (e) => {
    e.preventDefault();

    setUserSt({
      ime: user.ime,
      prezime: user.prezime,
      email: user.email,
      password: user.password,
    });
  };
  console.log(userSt);
  return (
    <div id="register">
      <div className="formDiv">
        <div className="niceToMeetDiv">
          <h2>Dobro došli</h2>
        </div>
        <form
          onSubmit={(e) => {
            handleValues(e);
          }}
        >
          <label htmlFor="fname">Ime</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => {
              user.ime = e.target.value;
              console.log(user.ime);
            }}
          />
          <label htmlFor="lname">Prezime</label>
          <input
            type="text"
            id="lname"
            name="fname"
            onChange={(e) => {
              user.prezime = e.target.value;
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              user.email = e.target.value;
            }}
          />
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              user.password = e.target.value;
            }}
          />
          <input
            type="submit"
            value="Registruje se"
            className="RegisterButton"
          />
          <div className="link">
            <Link to="/login">Kliknite za logovanje</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
