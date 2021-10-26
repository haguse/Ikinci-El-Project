import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignIn";
import logo from "../../images/logo.svg";
import womanImage from "../../images/Sign Up/Woman.png";
import { signIn } from "../../actions/authActions";

import { ACCESS_TOKEN_NAME } from "../../api";
import { useHistory } from "react-router";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user);
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const token = localStorage.getItem(ACCESS_TOKEN_NAME);

  if (token) {
    history.push("/");
  }

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
            <p className="sign__texts__sign">Giriş Yap</p>
            <p>Fırsatlardan yararlanmak için giriş yap!</p>
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
                  maxLength="20"
                  placeholder="*****"
                  onChange={handleInput}
                  value={user.password}
                />
              </div>
              <button>Giriş Yap</button>
            </form>
            <p className="sign__login">
              Hesabın yok mu ?
              <span>
                <Link to="/sign-up"> Üye Ol</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
