import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";
import NotFound404Page from "./pages/NotFound404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound404Page} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
