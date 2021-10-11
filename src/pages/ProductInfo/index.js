import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Wrapper } from "./ScProductInfo";

const ProductInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  return (
    <Wrapper>
      <div className="product">
        <div className="product__image">
          <img
            src="https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image5.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=WMgXsBCNAZesTfkqPgDDumDoYC5C7lr%2BHroPa%2BJ8oypDP9Svldq7GGVxP2IKtqpbytveAhZ0iO6RD27MyJjTjWB7rH8Q9tFiyQEW4Ay9z7YEiuat5NoBCun7IEoPNQ9gWugEl%2BK82wsIx7ae8lcCZZfZRyTCZOJf7A6UMqJ%2BnzTYmHgdGhywIeR6azQn4Jbqc7Zkneyjyg7RxFmyv8h%2FvWX9NL14r%2FvD9ctduN8EqDyr7f0AesR%2FfjS3EVHY3gYdVkrtJ%2FHhZTOil%2Bl6o5WEszlu5eJHTg5bl5KaQDU%2BFcbHjsqF5xlMf5jtlZ3OEpsDPHak5XnCjb4LQFBenheEKQ%3D%3D"
            alt="Product"
          />
        </div>
        <div className="product__content">
          <p className="product__content__title">Beli Uzun Trençkot Kareli</p>
          <div className="product__content__info">
            <p className="product__content__info__title">Marka:</p>
            <span>Lusi Viton</span>
          </div>
          <div className="product__content__info">
            <p className="product__content__info__title">Renk:</p>
            <span>Lusi Viton</span>
          </div>
          <div className="product__content__info">
            <p className="product__content__info__title">Kullanım Durumu:</p>
            <span>Lusi Viton</span>
          </div>
          <p className="product__content__price">120 TL</p>
          <div className="product__content__buttons">
            <button>Satın Al</button>
            <button>Teklif Ver</button>
          </div>
          <p className="product__content__desc__title">Açıklama</p>
          <p className="product__content__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptates. Rerum magni deleniti rem ducimus, laudantium quo,
            doloribus, perspiciatis ipsum ratione totam vel. Omnis autem
            necessitatibus ipsa. Eius reiciendis commodi exercitationem aut
            natus perferendis, qui earum repellendus voluptate quo id.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductInfo;
