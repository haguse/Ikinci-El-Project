import React from "react";
import logo from "../../images/logo.svg";
import { Wrapper } from "./ScHeader";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={logo} alt="İkinci El" />
        </Link>
      </div>
      <div>
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
      </div>
    </Wrapper>
  );
};

export default Header;
