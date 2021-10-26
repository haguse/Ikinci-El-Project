import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Offer, ButtonAccept, ButtonCancel } from "./ScGivenOffers";
import { cancelOffer } from "../../../actions/accountActions";
import BuyOfferedProductModal from "../../Modals/BuyOfferedProductModal";
import { Link } from "react-router-dom";

const GivenOffers = () => {
  const dispatch = useDispatch();
  const givenOffers = useSelector((state) => state.account.givenOffers);

  const [showBuyModal, setShowBuyModal] = useState(false);
  const [productId, setProductId] = useState(false);

  const handleBuy = (id) => {
    setProductId(id);
    setShowBuyModal(true);
  };

  const handleCancelOffer = (id) => {
    dispatch(cancelOffer(id));
  };

  return (
    <>
      <Wrapper>
        {showBuyModal && (
          <BuyOfferedProductModal
            isOpen={showBuyModal}
            closeModal={() => setShowBuyModal(false)}
            productId={productId}
          />
        )}
        {givenOffers.map((offer) => (
          <Offer key={offer.id}>
            <div className="offer__content">
              <div className="offer__content__img">
                <Link
                  to={`/products/${offer.product.category.title}/${offer.product.brand.title}/${offer.product.id}`}
                >
                  <img src={offer.product.imageUrl} alt="" />
                </Link>
              </div>
              <div className="offer__content__desc">
                <Link
                  to={`/products/${offer.product.category.title}/${offer.product.brand.title}/${offer.product.id}`}
                >
                  {offer.product.brand.title} {offer.product.category.title}
                </Link>
                <div>
                  Verilen Teklif: <span>{offer.offeredPrice} TL</span>
                </div>
              </div>
            </div>

            {offer.isSold !== "sold" && offer.status === "offered" && (
              <div className="offer__buttons">
                <ButtonCancel onClick={() => handleCancelOffer(offer.id)}>
                  Teklifi İptal Et
                </ButtonCancel>
              </div>
            )}

            {offer.isSold === "sold" && offer.status === "offered" && (
              <span className="isSold">
                Teklife Cevap Gelmeden Ürün Satıldı
              </span>
            )}

            {offer.status === "rejected" && (
              <div className="offer-rejected">
                <p style={{ color: "#F77474" }}>Reddedildi</p>
                <span className="isSold">{`${
                  offer.isSold === "sold" ? `(Ürün Satıldı)` : ""
                }`}</span>
              </div>
            )}

            {offer.status === "accepted" && (
              <div className="offer-accepted">
                <p style={{ color: "#4B9CE2" }}>Onaylandı</p>
                {offer.isSold === "sold" ? (
                  <span className="isSold">(Ürün Satıldı)</span>
                ) : (
                  <ButtonAccept onClick={() => handleBuy(offer.product.id)}>
                    Satın Al
                  </ButtonAccept>
                )}
              </div>
            )}
          </Offer>
        ))}
      </Wrapper>
    </>
  );
};

export default GivenOffers;
