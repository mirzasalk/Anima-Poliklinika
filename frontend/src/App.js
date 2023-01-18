import React from "react";
import NavBar from "./components/navBAR/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import LogIn from "./pages/login/login";
import Register from "./pages/register/register";
import Therapy from "./pages/therapy/Therapy";
import "./app.css";
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="therapy" element={<Therapy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
