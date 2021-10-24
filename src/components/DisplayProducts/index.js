import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../actions/productsActions";
import Spinner from "../Spinner";
import { Wrapper } from "./ScDisplayProducts";
import { useParams } from "react-router";

const DisplayProducts = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const isLoadingProducts = useSelector(
    (state) => state.products.isLoadingProducts
  );

  let filteredProducts = [];

  const allProducts = useSelector((state) => state.products.productsData);
  if (params?.category?.length > 0)
    filteredProducts = allProducts.filter(
      (product) => product.category.title === params.category
    );
  else filteredProducts = allProducts;

  return (
    <>
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <Wrapper className="products">
          {filteredProducts.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/products/${product.category.title}/${product.brand.title}/${product.id}`}
              >
                <div className="product">
                  <div className="product__img">
                    <img src={product.imageUrl} alt="Product"></img>
                  </div>
                  <div className="product__info">
                    <p className="product__info__brand">
                      {product.brand.title}
                    </p>
                    <p>
                      <span>Renk: {product.color.title}</span>
                    </p>
                  </div>
                  <div className="product__price">
                    <span>{product.price} TL</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

export default React.memo(DisplayProducts);
