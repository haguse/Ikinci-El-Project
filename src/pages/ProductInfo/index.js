import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Wrapper, ButtonOne, ButtonTwo } from "./ScProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../actions/productsActions";
import BuyProductModal from "../../components/Modals/BuyProductModal";
import OfferProductModal from "../../components/Modals/OfferProductModal";
import Loading from "../../components/Spinner";
import { toast } from "react-toastify";
import { getGivenOffers, cancelOffer } from "../../actions/accountActions";
import { isProductOffered } from "../../actions/productsActions";
import { getCookie } from "../../api";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
    dispatch(getGivenOffers());
  }, [id, dispatch]);

  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoadingProduct);
  const givenOffers = useSelector((state) => state.account.givenOffers);
  const isOffered = useSelector((state) => state.products.isProductOffered);

  if (givenOffers?.length > 0) {
    const offer = givenOffers.filter(
      (offer) => offer.product.id === product.id
    );
    if (offer[0]?.product?.id) {
      dispatch(isProductOffered(true));
      var offerId = offer[0].id;
      var offerPrice = offer[0].offeredPrice;
      var offerStatus = offer[0].status;
    } else {
      dispatch(isProductOffered(false));
    }
  }

  const handleButtonBuy = () => {
    if (getCookie("Bearer")) {
      setShowBuyModal(true);
      setRefreshPage(!refreshPage);
    } else toast.warn("Lütfen giriş yapın.");
  };

  const handleButtonOffer = () => {
    if (getCookie("Bearer")) {
      if (
        isOffered &&
        offerStatus !== "acceepted" &&
        offerStatus !== "rejected"
      ) {
        dispatch(cancelOffer(offerId));
        setRefreshPage(!refreshPage);
      } else {
        setShowOfferModal(true);
      }
    } else toast.warn("Lütfen giriş yapın.");
  };

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
              <p className="product__content__price">{product.price} TL</p>

              {getCookie("Bearer") &&
                isOffered &&
                offerStatus !== "rejected" &&
                product.isSold !== true && (
                  <div className="product__content__offerPrice">
                    <p>
                      Verilen Teklif: <span>{offerPrice} TL</span>
                    </p>
                    {offerStatus === "accepted" && (
                      <p style={{ marginTop: "0.4rem" }}>
                        (Teklif kabul edildi. Profil sayfanıza gidiniz.)
                      </p>
                    )}
                  </div>
                )}

              {product.isSold ? (
                <div className="product__content__button">
                  <button className="cant-buy">Bu Ürün Satışda Değil</button>
                </div>
              ) : (
                <div className="product__content__button">
                  <ButtonOne onClick={handleButtonBuy}>Satın Al</ButtonOne>
                  {product.isOfferable && (
                    <ButtonTwo onClick={handleButtonOffer}>
                      {isOffered &&
                      offerStatus !== "rejected" &&
                      offerStatus !== "accepted"
                        ? "Teklifi Geri Çek"
                        : "Teklif Ver"}
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
