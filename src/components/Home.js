import { useState, useEffect } from "react";
import { getFromStorage } from "../utils/storage";
import axios from "axios";
import Table from "./Table";
import SignIn from "./SignIn";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    const obj = getFromStorage("lib");
    if (obj && obj.token) {
      const { token } = obj;
      console.log(token);
      verifyToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      let url = "http://localhost:8080/api/accounts/verify?token=" + token;
      //   console.log("help");
      const response = await axios.get(url);
      //   console.log("response", response.data.success);
      if (response.data.success) {
        setToken(token);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }

  return (
    <div>
      <Table />
    </div>
  );
};
export default Home;
