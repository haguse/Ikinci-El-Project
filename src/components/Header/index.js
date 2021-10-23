import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { Wrapper } from "./ScHeader";
import { AiOutlinePlus, AiOutlineUser, AiOutlineForm } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../../api";
import { history } from "../../_helpers/history";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { deleteTokenCookie } from "../../api";

const Header = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);

  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    localStorage.removeItem("email");
    deleteTokenCookie("Bearer");
    setIsAuthenticated(false);
    history.push("/");
    toast.success("Çıkış yaptınız.");
  };
  if (location.pathname === "/sign-up" || location.pathname === "/sign-in")
    return null;
  else
    return (
      <>
        <Wrapper>
          <div>
            <Link to="/">
              <img src={logo} alt="İkinci El" />
            </Link>
          </div>
          <div className="buttons">
            {token ? (
              <>
                <Link to="/add-product">
                  <button>
                    <div>
                      <AiOutlinePlus />
                      <span>Ürün Ekle</span>
                    </div>
                  </button>
                </Link>
                <Link to="/profile">
                  <button>
                    <div>
                      <AiOutlineUser />
                      <span>Hesabım</span>
                    </div>
                  </button>
                </Link>
                <button onClick={handleLogout}>
                  <div>
                    <AiOutlineUser />
                    <span>Çıkış Yap</span>
                  </div>
                </button>
              </>
            ) : (
              <>
                <div>
                  <Link to="/sign-in">
                    <button>
                      <div>
                        <BiLogIn />
                        <span>Giriş Yap</span>
                      </div>
                    </button>
                  </Link>
                  <Link to="/sign-up">
                    <button>
                      <div>
                        <AiOutlineForm />
                        <span>Üye Ol</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </Wrapper>
      </>
    );
};

export default Header;
