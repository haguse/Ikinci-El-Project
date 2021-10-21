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
            {/* {offer.isSold === "sold" && (
              <p style={{ color: "#B1B1B1" }}>Ürün Satıldı.</p>
            )} */}
            {offer.status === "rejected" && (
              <p style={{ color: "#F77474" }}>Reddedildi</p>
            )}
            {offer.status === "accepted" && offer.isSold !== "sold" && (
              <>
                <div className="offer-accepted">
                  <ButtonAccept onClick={() => handleBuy(offer.product.id)}>
                    Satın Al
                  </ButtonAccept>
                  <p style={{ color: "#4B9CE2" }}>Onaylandı</p>
                </div>
              </>
            )}
          </Offer>
        ))}
      </Wrapper>
    </>
  );
};

export default GivenOffers;
