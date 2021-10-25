import React, { useRef } from "react";
import ReactDOM from "react-dom";
import {
  ModalContainer,
  ButtonOne,
  ButtonTwo,
} from "./ScBuyOfferedProductModal";
import useOutsideClick from "../../../hooks/clickOutsideHook";

import { purchaseProductById } from "../../../actions/productsActions";
import { useDispatch } from "react-redux";

const BuyProductModal = ({ isOpen, closeModal, productId }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useOutsideClick(ref, () => {
    if (isOpen) closeModal();
  });

  const handleBuyProduct = () => {
    dispatch(purchaseProductById(productId));
    closeModal();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalContainer className="buy-product-modal">
      <div ref={ref} className="modal">
        <p className="modal__title">Satın Al</p>
        <p className="modal__text">Satın almak istiyor musunuz?</p>
        <div className="modal__buttons">
          <ButtonOne onClick={handleBuyProduct}>Satın Al</ButtonOne>
          <ButtonTwo onClick={closeModal}>Vazgeç</ButtonTwo>
        </div>
      </div>
    </ModalContainer>,
    document.getElementById("root")
  );
};

export default BuyProductModal;
