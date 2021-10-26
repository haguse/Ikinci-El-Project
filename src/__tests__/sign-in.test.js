import SignIn from "../pages/SignIn";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { history } from "../_helpers/history";

test("sign in component should render sign dep. texts", () => {
  render(
    <>
      <Router history={history}>
        <SignIn />
      </Router>
    </>
  );

  screen.getByText(/email/i);
  screen.getByText(/şifre/i);
});
