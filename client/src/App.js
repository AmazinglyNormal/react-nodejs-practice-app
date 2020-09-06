import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
