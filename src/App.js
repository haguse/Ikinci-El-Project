import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router";
import SignIn from "./pages/SignIn";
import NotFound404Page from "./pages/NotFound404";
import ProductInfo from "./pages/ProductInfo";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import AddProduct from "./pages/AddProduct";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />

      <Header />

      <Switch>
        <PrivateRoute path="/add-product">
          <AddProduct />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/product/:id" component={ProductInfo} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={NotFound404Page} />
      </Switch>
    </>
  );
}

export default App;
