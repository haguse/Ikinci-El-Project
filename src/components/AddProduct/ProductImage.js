import React from "react";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";

const ProductImage = ({ hideProgress }) => {
  const imageUrl = useSelector((state) => state.file.imageUrl);

  if (imageUrl?.url?.length > 0) {
    hideProgress();
    return (
      <>
        <div style={{ position: "relative", width: "72px", marginTop: "10px" }}>
          <img src={imageUrl.url} width="70" height="70" alt="Product" />
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
            }}
          >
            <AiFillCloseCircle />
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default ProductImage;
