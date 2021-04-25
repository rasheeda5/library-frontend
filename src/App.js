// import { useState, useEffect, useMemo } from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
