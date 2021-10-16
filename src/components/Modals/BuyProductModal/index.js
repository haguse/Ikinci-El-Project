import React from "react";
import BuyProductModal from "./ScBuyProductModal";

const index = () => {
  return (
    <BuyProductModal>
      <div className="modal">
        <p className="modal__title">Satın Al</p>
        <p className="modal__text">Satın almak istiyor musunuz?</p>
        <div className="modal__buttons">
          <button>Satın Al</button>
          <button>Vazgeç</button>
        </div>
      </div>
    </BuyProductModal>
  );
};

export default index;
