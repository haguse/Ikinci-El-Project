import React from "react";
import { Wrapper } from "./ScProfile";
import { AiOutlineUser } from "react-icons/ai";

const index = () => {
  return (
    <Wrapper>
      <div className="profile__info">
        <div>
          <AiOutlineUser />
        </div>
        <p>asdadasd@gmail.com</p>
      </div>
    </Wrapper>
  );
};

export default index;
