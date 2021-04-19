import * as ReactBootStrap from "react-bootstrap";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Buttons = ({ id, status }) => {
  return (
    <div>
      <ReactBootStrap.Button
        variant="dark"
        disabled={status}
        onClick={() => {}}
      >
        Check In
      </ReactBootStrap.Button>{" "}
      <ReactBootStrap.Button variant="dark" disabled={!status}>
        Check Out
      </ReactBootStrap.Button>{" "}
      <ReactBootStrap.Button
        variant="dark"
        onClick={() => {
          console.log(id);
        }}
      >
        Details
      </ReactBootStrap.Button>
    </div>
  );
};
export default Buttons;
