// import { useState, useEffect, useMemo } from "react";
import { Table, CheckIn, CheckOut, Details } from "./components";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Table} />
        <Route path="/checkin/:id" component={CheckIn} />
        <Route path="/checkout/:id" component={CheckOut} />
        <Route path="/details/:id" component={Details} />
      </Router>
    </div>
  );
};

export default App;
