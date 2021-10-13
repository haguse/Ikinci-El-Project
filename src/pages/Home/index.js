import React, { useEffect, useState } from "react";
import { Wrapper } from "./ScHome";
import Banner1 from "../../images/Home/Banner1.png";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Categories from "../../components/Categories";
import { getAllProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filteredProducts);

  useEffect(() => {
    dispatch(getAllProducts());
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(products);

  return (
    <>
      <Wrapper>
        <img className="banner" src={Banner1} alt="Tarz Ürünler" />

        <Categories />

        <div className="products">
          {isLoading && (
            <div className="spinner">
              <Spinner />
            </div>
          )}

          {products.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="product">
                  <div className="product__img">
                    <img src={product.imageUrl} alt="Product"></img>
                  </div>
                  <div className="product__info">
                    <p className="product__info__brand">
                      {product.brand.title}
                    </p>
                    <p>
                      <span>Renk: </span>
                      {product.color.title}
                    </p>
                  </div>
                  <div className="product__price">
                    <span>{product.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

// export default React.memo(Home);
export default Home;
