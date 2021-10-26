import SignUp from "../pages/SignUp";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { history } from "../_helpers/history";

test("sign up component should render sign dep. texts", () => {
  render(
    <>
      <Router history={history}>
        <SignUp />
      </Router>
    </>
  );

  screen.getByText(/email/i);
  screen.getByText(/şifre/i);
});
