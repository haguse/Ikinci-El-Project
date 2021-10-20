import React, { useEffect, useState } from "react";
import { Wrapper } from "./ScProfile";
import { AiOutlineUser } from "react-icons/ai";
import { getGivenOffers } from "../../actions/accountActions";
import { getReceivedOffers } from "../../actions/accountActions";
import { useDispatch } from "react-redux";
import GivenOffers from "../../components/Offers/GivenOffers";
import ReceivedOffers from "../../components/Offers/ReceivedOffers";

const Profile = () => {
  const email = localStorage.getItem("email");
  const [currentOfferComponent, setCurrentOfferComponent] = useState("given");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGivenOffers());
    dispatch(getReceivedOffers());
  }, [dispatch]);
  return (
    <Wrapper>
      <div className="profile__info">
        <div>
          <AiOutlineUser />
        </div>
        <p>{email}</p>
      </div>
      <div className="offers">
        <div className="offers__titles">
          <p onClick={() => setCurrentOfferComponent("given")}>
            Teklif Aldıklarım
          </p>
          <p onClick={() => setCurrentOfferComponent("received")}>
            Teklif Verdiklerim
          </p>
        </div>
        <div className="offers__components">
          {currentOfferComponent === "given" ? (
            <ReceivedOffers />
          ) : (
            <GivenOffers />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
