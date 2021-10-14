import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Wrapper } from "./ScProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../actions/productsActions";
import NotFound404 from "../NotFound404";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
  }, [id, dispatch]);

  const product = useSelector((state) => state.products.product);

  console.log({ product });

  if (typeof product.imageUrl === "string") {
    return (
      <Wrapper>
        <div className="product">
          <div className="product__image">
            <img src={product.imageUrl} alt="Product" />
          </div>
          <div className="product__content">
            <p className="product__content__title">{product.title}</p>
            <div className="product__content__info">
              <p className="product__content__info__title">Marka:</p>
              <span>{product.brand.title}</span>
            </div>
            <div className="product__content__info">
              <p className="product__content__info__title">Renk:</p>
              <span>{product.color.title}</span>
            </div>
            <div className="product__content__info">
              <p className="product__content__info__title">Kullanım Durumu:</p>
              <span>{product.status.title}</span>
            </div>
            <p className="product__content__price">{product.price}</p>
            <div className="product__content__buttons">
              <button>Satın Al</button>
              <button>Teklif Ver</button>
            </div>
            <p className="product__content__desc__title">Açıklama</p>
            <p className="product__content__desc">{product.description}</p>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return <NotFound404 />;
  }
};

export default ProductInfo;
