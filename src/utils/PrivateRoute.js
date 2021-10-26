import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCookie } from "../api";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getCookie("Bearer") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
