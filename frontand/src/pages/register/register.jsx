import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="register">
      <div className="homeDiv">
        <Link className="backToHomeBtn" to="/">
          <img src="home-icon.png" alt="home" />
        </Link>
      </div>
      {ime} <br />
      {prezime} <br />
      {email} <br />
      {password} <br />
      <div className="divZaRazdvanjanje">
        <div className="formDiv">
          <div className="niceToMeetDiv">
            <h2>Dobro došli</h2>
          </div>
          <form>
            <label htmlFor="fname">Ime</label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => {
                setIme(e.target.value);
              }}
            />
            <label htmlFor="lname">Prezime</label>
            <input
              type="text"
              id="lname"
              name="fname"
              onChange={(e) => {
                setPrezime(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
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
