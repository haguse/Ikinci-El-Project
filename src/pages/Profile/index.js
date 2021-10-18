import React from "react";
import { Wrapper } from "./ScProfile";
import { AiOutlineUser } from "react-icons/ai";

const index = () => {
  const email = localStorage.getItem("email");
  return (
    <Wrapper>
      <div className="profile__info">
        <div>
          <AiOutlineUser />
        </div>
        <p>{email}</p>
      </div>
    </Wrapper>
  );
};

export default index;
