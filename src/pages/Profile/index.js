import React, { useEffect, useState } from "react";
import { Wrapper } from "./ScProfile";
import { AiOutlineUser } from "react-icons/ai";
import { getGivenOffers } from "../../actions/accountActions";
import { getReceivedOffers } from "../../actions/accountActions";
import { useDispatch } from "react-redux";
import GivenOffers from "../../components/Offers/GivenOffers";
import ReceivedOffers from "../../components/Offers/ReceivedOffers";
import { ACCESS_TOKEN_NAME } from "../../api";
import { history } from "../../_helpers/history";

const Profile = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  if (!token) history.push("sign-in");

  const email = localStorage.getItem("email");
  const [currentOfferComponent, setCurrentOfferComponent] =
    useState("received");
  const [activeOfferPage, setActiveOfferPage] = useState("received");

  const handleClickGiven = () => {
    setCurrentOfferComponent("given");
    setActiveOfferPage("given");
  };

  const handleClickReceived = () => {
    setCurrentOfferComponent("received");
    setActiveOfferPage("received");
  };

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
          <p
            onClick={handleClickReceived}
            className={activeOfferPage === "received" && `active`}
          >
            Teklif Aldıklarım
          </p>
          <p
            onClick={handleClickGiven}
            className={activeOfferPage === "given" && `active`}
          >
            Teklif Verdiklerim
          </p>
        </div>
        <div className="offers__components">
          {currentOfferComponent === "given" ? (
            <GivenOffers />
          ) : (
            <ReceivedOffers />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
