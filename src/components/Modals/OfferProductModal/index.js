import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, ButtonOne } from "./ScOfferProductModal";
import useOutsideClick from "../../../hooks/clickOutsideHook";
import { useDispatch, useSelector } from "react-redux";
import { offerProduct } from "../../../actions/productsActions";

const OfferProductModal = ({ isOpen, closeModal }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  const [offerPercentage, setOfferPercantage] = useState("");
  const [customOffer, setCustomOffer] = useState("");

  useOutsideClick(ref, () => {
    if (isOpen) closeModal();
  });

  const handleOfferProduct = () => {
    if (offerPercentage.length > 0 || customOffer.length > 0) {
      dispatch(
        offerProduct(product.id, product.price, offerPercentage, customOffer)
      );
    }
  };

  const handleOfferPercantage = (e) => {
    setOfferPercantage(e.target.value);
    setCustomOffer("");
  };

  const handleCustomOffer = (e) => {
    setCustomOffer(e.target.value);
    if (customOffer.length > 0) setOfferPercantage("");
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalContainer className="buy-product-modal">
      <div ref={ref} className="modal">
        <p className="modal__title">Teklif Ver</p>
        <div className="modal__info">
          <div>
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>{product.category.title}</p>
          </div>
          <div>
            <span>{product.price} TL</span>
          </div>
        </div>
        <div className="modal__offers">
          <div className="modal__offers__offer">
            <input
              type="radio"
              value={20}
              name=""
              id="perc20"
              onChange={handleOfferPercantage}
              checked={offerPercentage === "20"}
            />
            <label htmlFor="perc20">%20'si Kadar Teklif Ver</label>
          </div>
          <div className="modal__offers__offer">
            <input
              type="radio"
              value={30}
              name=""
              id="perc30"
              onChange={handleOfferPercantage}
              checked={offerPercentage === "30"}
            />
            <label htmlFor="perc30">%30'u Kadar Teklif Ver</label>
          </div>
          <div className="modal__offers__offer">
            <input
              type="radio"
              value={40}
              name=""
              id="perc40"
              onChange={handleOfferPercantage}
              checked={offerPercentage === "40"}
            />
            <label htmlFor="perc40">%40'ı Kadar Teklif Ver</label>
          </div>
          <div>
            <input
              className="modal__offers__offer__custom"
              type="number"
              placeholder="Teklif Belirle"
              value={customOffer}
              onChange={handleCustomOffer}
            />
          </div>
        </div>
        <div className="modal__buttons">
          <ButtonOne onClick={handleOfferProduct}>Onayla</ButtonOne>
        </div>
      </div>
    </ModalContainer>,
    document.getElementById("root")
  );
};

export default OfferProductModal;
