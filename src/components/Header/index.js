import React from "react";
import logo from "../../images/logo.svg";
import { Wrapper } from "./ScHeader";
import { AiOutlinePlus, AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={logo} alt="İkinci El" />
        </Link>
      </div>
      <div>
        {token ? (
          <>
            <button>
              <div>
                <AiOutlinePlus />
                <span>Ürün Ekle</span>
              </div>
            </button>
            <button>
              <div>
                <AiOutlineUser />
                <span>Hesabım</span>
              </div>
            </button>
          </>
        ) : (
          <>
            <div>
              <AiOutlineLogin />
              <span>Giriş Yap</span>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
