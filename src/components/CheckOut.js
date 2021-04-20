// import * as ReactBootStrap from "react-bootstrap";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CheckOut = ({ checkOutButtonClicked, id }) => {
  return (
    <div>
      <button
        onClick={() => {
          checkOutButtonClicked(id);
        }}
      >
        checkout
      </button>
    </div>
  );
};
export default CheckOut;
