import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { setInStorage } from "../utils/storage";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/api/accounts/signin";
    try {
      const response = await axios.post(url, {
        username: username,
        password: password,
      });
      console.log("response", response);
      if (response.data.success) {
        setInStorage("lib", { token: response.data.token });
        window.location = "/";
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            isInvalid={!username}
            type="username"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            isInvalid={!password}
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!password || !username) {
              alert("username and password cannot be blank");
            } else {
              submit(e);
            }
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SignIn;
