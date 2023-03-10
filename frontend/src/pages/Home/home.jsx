import React from "react";
import NavBar from "../../components/navBAR/navbar";
import "./home.css";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const getData = async () => {
    try {
      const response = await axios.post(
        "/api/user/GetUserInfoById",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="home">
      <NavBar />
    </div>
  );
};
export default Home;
