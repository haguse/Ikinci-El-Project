import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Offer, ButtonAccept, ButtonReject } from "./ScReceivedOffers";

const ReceivedOffers = () => {
  const receivedOffers = useSelector((state) => state.account.receivedOffers);
  console.log(receivedOffers);

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
                <p>{offer.product.description}</p>
                <div>
                  Alınan Teklif: <span>{offer.offeredPrice} TL</span>
                </div>
              </div>
            </div>
            {offer.status === "offered" && (
              <div className="offer__buttons">
                <ButtonAccept>Onayla</ButtonAccept>
                <ButtonReject>Reddet</ButtonReject>
              </div>
            )}
          </Offer>
        ))}
      </Wrapper>
    </>
  );
};

export default ReceivedOffers;
