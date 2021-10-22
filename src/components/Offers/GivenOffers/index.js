import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Offer, ButtonAccept, ButtonCancel } from "./ScGivenOffers";
import { cancelOffer } from "../../../actions/accountActions";
import { purchaseProductById } from "../../../actions/productsActions";

const GivenOffers = () => {
  const dispatch = useDispatch();
  const givenOffers = useSelector((state) => state.account.givenOffers);
  console.log(givenOffers);

  const handleBuy = (id) => {
    dispatch(purchaseProductById(id));
  };

  const handleCancelOffer = (id) => {
    dispatch(cancelOffer(id));
  };

  return (
    <>
      <Wrapper>
        {givenOffers.map((offer) => (
          <Offer key={offer.id}>
            <div className="offer__content">
              <div className="offer__content__img">
                <img src={offer.product.imageUrl} alt="" />
              </div>
              <div className="offer__content__desc">
                <p>
                  {offer.product.brand.title} {offer.product.category.title}
                </p>
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

            {offer.status === "rejected" && (
              <div className="offer-rejected">
                <p style={{ color: "#F77474" }}>Reddedildi</p>
                <span className="isSold">{`${
                  offer.isSold === "sold" && `(Ürün Satıldı)`
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
