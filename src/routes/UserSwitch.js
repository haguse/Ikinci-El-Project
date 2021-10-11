import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/Home";
import NotFound404Page from "../pages/NotFound404";
import ProductInfo from "../pages/ProductInfo"

const UserSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductInfo} />
      <Route path="*" component={NotFound404Page} />
    </Switch>
  );
};

export default UserSwitch;
