import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScSignUp";
import logo from "../../images/logo.png";
import womanImage from "../../images/Sign Up/Woman.png";

const index = () => {
  return (
    <Wrapper>
      <div className="container__image">
        <img src={womanImage} alt="" />
      </div>
      <div className="container__content">
        <div>
          <img src={logo} alt="İkini El" />
        </div>
        <div className="signup">
          <div className="signup__texts">
            <p className="signup__texts__signup">Üye Ol</p>
            <p>Fırsatlardan yararlanmak için üye ol!</p>
          </div>
          <div className="signup__form">
            <form>
              <div className="signup__form__item">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email@example.com" />
              </div>
              <div className="signup__form__item">
                <label htmlFor="">Şifre</label>
                <input type="password" />
              </div>
              <button>Üye Ol</button>
            </form>
            <p className="signup__login">
              Hesabın var mı?{" "}
              <span>
                <Link to="/sign-in">Giriş Yap</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
