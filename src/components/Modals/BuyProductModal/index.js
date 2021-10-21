import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, ButtonOne, ButtonTwo } from "./ScBuyProductModal";
import useOutsideClick from "../../../hooks/clickOutsideHook";

import { purchaseProductById } from "../../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const BuyProductModal = ({ isOpen, closeModal }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useOutsideClick(ref, () => {
    if (isOpen) closeModal();
  });

  const handleBuyProduct = () => {
    dispatch(purchaseProductById(product.id));
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
