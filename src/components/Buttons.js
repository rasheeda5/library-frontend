import * as ReactBootStrap from "react-bootstrap";

const Buttons = () => {
  return (
    <div>
      <ReactBootStrap.Button variant="dark" disabled>
        Check In
      </ReactBootStrap.Button>{" "}
      <ReactBootStrap.Button variant="dark">Check Out</ReactBootStrap.Button>{" "}
      <ReactBootStrap.Button variant="dark">Details</ReactBootStrap.Button>
    </div>
  );
};
export default Buttons;
