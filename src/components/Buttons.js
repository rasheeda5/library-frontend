import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Details from "./Details";
import Home from "./Home";
import axios from "axios";
import { getFromStorage, setInStorage } from "../utils/storage";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Buttons = ({ id, status }) => {
  const [showCheckIn, setShowCheckIn] = useState(true);
  const [showCheckOut, setShowCheckOut] = useState(true);
  const [showDetails, setShowDetails] = useState(true);

  const checkInButtonClicked = (id) => {
    setShowCheckIn(!showCheckIn);
  };

  const checkOutButtonClicked = (id) => {
    setShowCheckOut(!showCheckOut);
  };

  const detailsButtonClicked = (id) => {
    setShowDetails(!showDetails);
  };

  const logoutButtonClicked = async () => {
    try {
      const obj = getFromStorage("lib");
      if (obj && obj.token) {
        const { token } = obj;
        console.log(token);
        let url = "http://localhost:8080/api/accounts/logout?token=" + token;
        //   console.log("help");
        const response = await axios.get(url);
        if (response.data.success) {
          setInStorage("lib", { token: null });
          window.location = "/";
        } else {
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {showCheckIn ? (
        <ReactBootStrap.Button
          variant="dark"
          disabled={status}
          onClick={() => {
            checkInButtonClicked(id);
          }}
        >
          Check In
        </ReactBootStrap.Button>
      ) : (
        <CheckIn checkInButtonClicked={checkInButtonClicked} />
      )}{" "}
      {showCheckOut ? (
        <ReactBootStrap.Button
          variant="dark"
          disabled={!status}
          onClick={() => {
            checkOutButtonClicked(id);
          }}
        >
          Check Out
        </ReactBootStrap.Button>
      ) : (
        <CheckOut checkOutButtonClicked={checkOutButtonClicked} />
      )}{" "}
      {showDetails ? (
        <ReactBootStrap.Button
          variant="dark"
          onClick={() => {
            detailsButtonClicked(id);
          }}
        >
          Details
        </ReactBootStrap.Button>
      ) : (
        <Details detailsButtonClicked={detailsButtonClicked} id={id} />
      )}{" "}
      <ReactBootStrap.Button
        variant="dark"
        onClick={() => {
          logoutButtonClicked();
        }}
      >
        Logout
      </ReactBootStrap.Button>
    </div>
  );
};
export default Buttons;
