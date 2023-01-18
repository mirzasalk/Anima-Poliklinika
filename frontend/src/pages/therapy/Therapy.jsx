import react from "react";
import axios from "axios";
import { useEffect } from "react";
const Therapy = () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return "Therapy";
};

export default Therapy;
