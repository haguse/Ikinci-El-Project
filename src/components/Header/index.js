import React from "react";
import logo from "../../images/logo.svg";
import { Wrapper } from "./ScHeader";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
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
            <CgProfile />
            <span>Hesabım</span>
          </div>
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
