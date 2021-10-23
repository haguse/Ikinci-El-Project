import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Wrapper, ButtonOne, ButtonTwo } from "./ScProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../actions/productsActions";
// import NotFound404 from "../NotFound404";
import BuyProductModal from "../../components/Modals/BuyProductModal";
import OfferProductModal from "../../components/Modals/OfferProductModal";
import Loading from "../../components/Spinner";
import { ACCESS_TOKEN_NAME } from "../../api";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
  }, [id, dispatch]);

  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoadingProduct);
  console.log(isLoading);

  if (typeof product.imageUrl === "string") {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <Wrapper>
          {showBuyModal && (
            <BuyProductModal
              isOpen={showBuyModal}
              closeModal={() => setShowBuyModal(false)}
            />
          )}
          {showOfferModal && (
            <OfferProductModal
              isOpen={showOfferModal}
              closeModal={() => setShowOfferModal(false)}
            />
          )}
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
                <p className="product__content__info__title">
                  Kullanım Durumu:
                </p>
                <span>{product.status.title}</span>
              </div>
              <p className="not-offerable">
                {!product.isOfferable && "* Ürün Tekliflere Açık Değil"}
              </p>
              <p className="product__content__price">{product.price}</p>
              {product.isSold ? (
                <div className="product__content__button">
                  <button className="cant-buy">Bu Ürün Satışda Değil</button>
                </div>
              ) : (
                <div className="product__content__button">
                  <ButtonOne
                    onClick={() => {
                      if (token) setShowBuyModal(true);
                      else toast.warn("Lütfen giriş yapın.");
                    }}
                  >
                    Satın Al
                  </ButtonOne>
                  {product.isOfferable && (
                    <ButtonTwo
                      onClick={() => {
                        if (token) {
                          setShowOfferModal(true);
                        } else toast.warn("Lütfen giriş yapın.");
                      }}
                    >
                      Teklif Ver
                    </ButtonTwo>
                  )}
                </div>
              )}
              <p className="product__content__desc__title">Açıklama</p>
              <p className="product__content__desc">{product.description}</p>
            </div>
          </div>
        </Wrapper>
      );
    }
  } else {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
};

export default ProductInfo;
