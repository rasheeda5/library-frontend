import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Details from "./Details";

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
          disabled={status}
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
          disabled={status}
          onClick={() => {
            detailsButtonClicked(id);
          }}
        >
          Details
        </ReactBootStrap.Button>
      ) : (
        <Details detailsButtonClicked={detailsButtonClicked} id={id} />
      )}
    </div>
  );
};
export default Buttons;
