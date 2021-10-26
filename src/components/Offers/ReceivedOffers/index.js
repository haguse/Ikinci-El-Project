import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Offer, ButtonAccept, ButtonReject } from "./ScReceivedOffers";
import { acceptOffer, rejectOffer } from "../../../actions/accountActions";

const ReceivedOffers = () => {
  const dispatch = useDispatch();
  const receivedOffers = useSelector((state) => state.account.receivedOffers);

  const handleAcceptOffer = (id) => {
    dispatch(acceptOffer(id));
  };

  const handleRejectOffer = (id) => {
    dispatch(rejectOffer(id));
  };

  return (
    <>
      <Wrapper>
        {receivedOffers.map((offer) => (
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
                  Alınan Teklif: <span>{offer.offeredPrice} TL</span>
                </div>
              </div>
            </div>
            {offer.isSold !== "sold" && offer.status === "offered" && (
              <div className="offer__buttons">
                <ButtonAccept onClick={() => handleAcceptOffer(offer.id)}>
                  Onayla
                </ButtonAccept>
                <ButtonReject onClick={() => handleRejectOffer(offer.id)}>
                  Reddet
                </ButtonReject>
              </div>
            )}
            {offer.isSold === "sold" && offer.status === "offered" && (
              <p className="isSold">Teklife Cevap Vermeden Ürün Satıldı</p>
            )}
            {offer.status === "rejected" && (
              <div className="offer-rejected">
                <p style={{ color: "#F77474" }}>Reddedildi</p>
                <span className="isSold">{`${
                  offer.isSold === "sold" ? "(Ürün Satıldı)" : ""
                }`}</span>
              </div>
            )}
            {offer.status === "accepted" && (
              <div className="offer-accepted">
                <p style={{ color: "#4B9CE2" }}>Onaylandı</p>
                <span className="isSold">
                  {`${
                    offer.isSold === "sold"
                      ? "(Ürün Satıldı)"
                      : "(Alıcı bekleniyor)"
                  }`}
                </span>
              </div>
            )}
          </Offer>
        ))}
      </Wrapper>
    </>
  );
};

export default ReceivedOffers;
