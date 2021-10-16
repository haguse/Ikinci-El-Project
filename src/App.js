import React from "react";
// import GlobalSwitch from "./routes/GlobalSwitch";
import Header from "./components/Header";
// import { ACCESS_TOKEN_NAME } from "./api";
import { Route, Switch } from "react-router";
import SignIn from "./pages/SignIn";
import NotFound404Page from "./pages/NotFound404";
import ProductInfo from "./pages/ProductInfo";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  return (
    <>
      <Header />

      <Switch>
        {/* <PrivateRoute path="/home">
          <Home />
        </PrivateRoute> */}

        <Route exact path="/product/:id" component={ProductInfo} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/" component={Home} />

        <Route exact path="*" component={NotFound404Page} />
      </Switch>
    </>
  );
}

export default App;
