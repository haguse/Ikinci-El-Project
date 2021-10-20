import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Offer } from "./ScGivenOffers";

const GivenOffers = () => {
  const givenOffers = useSelector((state) => state.account.givenOffers);
  console.log(givenOffers);
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
                <p>{offer.product.description}</p>
                <div>
                  Verilen Teklif: <span>{offer.offeredPrice} TL</span>
                </div>
              </div>
            </div>
            <div className="offer__buttons"></div>
          </Offer>
        ))}
      </Wrapper>
    </>
  );
};

export default GivenOffers;
