// import * as ReactBootStrap from "react-bootstrap";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Details = ({ detailsButtonClicked, id }) => {
  return (
    <div>
      <button
        onClick={() => {
          detailsButtonClicked(id);
        }}
      >
        deets
      </button>
    </div>
  );
};
export default Details;
//ok bye
