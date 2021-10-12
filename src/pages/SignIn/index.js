import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignIn";
import logo from "../../images/logo.svg";
import womanImage from "../../images/Sign Up/Woman.png";
import { signIn } from "../../api";

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
    console.log(user);
  };

  return (
    <Wrapper>
      <div className="container__image">
        <img src={womanImage} alt="" />
      </div>
      <div className="container__content">
        <div>
          <img src={logo} alt="İkini El" />
        </div>
        <div className="sign">
          <div className="sign__texts">
            <p className="sign__texts__sign">Giriş Yap</p>
            <p>Fırsatlardan yararlanmak için giriş yap!</p>
          </div>
          <div className="sign__form">
            <form onSubmit={handleSubmit}>
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
                <Link to="/sign-up">Üye Ol</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
