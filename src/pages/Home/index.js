import React from "react";
import { Wrapper } from "./ScHome";
import Banner1 from "../../images/Home/Banner1.png";
import Categories from "../../components/Categories";
import DisplayProducts from "../../components/DisplayProducts";

const Home = () => {
  return (
    <>
      <Wrapper>
        <img className="banner" src={Banner1} alt="Tarz Ürünler" />
        <Categories />
        <DisplayProducts />
      </Wrapper>
    </>
  );
};

// export default React.memo(Home);
export default Home;
