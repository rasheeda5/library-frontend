// import * as ReactBootStrap from "react-bootstrap";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CheckIn = ({ checkInButtonClicked, id }) => {
  return (
    <div>
      <button
        onClick={() => {
          checkInButtonClicked(id);
        }}
      >
        checkin
      </button>
    </div>
  );
};
export default CheckIn;
