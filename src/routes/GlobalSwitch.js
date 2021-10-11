import React from "react";
import { Route, Switch } from "react-router";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const GlobalSwitch = () => {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="" component={SignIn} />
    </Switch>
  );
};

export default GlobalSwitch;
