import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignUp";
import logo from "../../images/logo.svg";
import womanImage from "../../images/Sign Up/Woman.png";
import { signUp } from "../../actions/authActions";
import { history } from "../../_helpers/history";
import { getCookie } from "../../api";

const SignUp = () => {
  if (getCookie("Bearer")) {
    history.push("/");
  }
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user);
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <div className="container__image">
        <img src={womanImage} alt="" />
      </div>
      <div className="container__content">
        <div className="container__content__img">
          <Link to="/">
            <img src={logo} alt="İkini El" />
          </Link>
        </div>
        <div className="sign">
          <div className="sign__texts">
            <p className="sign__texts__sign">Üye Ol</p>
            <p>Fırsatlardan yararlanmak için üye ol!</p>
          </div>
          <div className="sign__form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="sign__form__item">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email@example.com"
                  onChange={handleInput}
                  value={user.email}
                />
              </div>
              <div className="sign__form__item">
                <label htmlFor="">Şifre</label>
                <input
                  name="password"
                  type="password"
                  minLength="8"
                  placeholder="*****"
                  onChange={handleInput}
                  value={user.password}
                />
              </div>
              <button type="submit">Üye Ol</button>
            </form>
            <p className="sign__login">
              Hesabın var mı?
              <span>
                <Link to="/sign-in"> Giriş Yap</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
