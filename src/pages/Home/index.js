import React, { useEffect, useState } from "react";
import { Wrapper } from "./ScHome";
import Banner1 from "../../images/Home/Banner1.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";

const Home = () => {
  const [products, setProduts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setProduts(res.data))
      .then(setIsLoading(false));
  }, []);

  return (
    <>
      <Wrapper>
        <img className="banner" src={Banner1} alt="Tarz Ürünler" />
        <div className="categories">
          <ul>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="selected">
                Hepsi
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="products">
          {isLoading && (
            <div className="spinner">
              <Spinner />
            </div>
          )}

          {products.map((product) => {
            console.log(product);
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="product">
                  <div className="product__img">
                    <img
                      src="https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image5.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=WMgXsBCNAZesTfkqPgDDumDoYC5C7lr%2BHroPa%2BJ8oypDP9Svldq7GGVxP2IKtqpbytveAhZ0iO6RD27MyJjTjWB7rH8Q9tFiyQEW4Ay9z7YEiuat5NoBCun7IEoPNQ9gWugEl%2BK82wsIx7ae8lcCZZfZRyTCZOJf7A6UMqJ%2BnzTYmHgdGhywIeR6azQn4Jbqc7Zkneyjyg7RxFmyv8h%2FvWX9NL14r%2FvD9ctduN8EqDyr7f0AesR%2FfjS3EVHY3gYdVkrtJ%2FHhZTOil%2Bl6o5WEszlu5eJHTg5bl5KaQDU%2BFcbHjsqF5xlMf5jtlZ3OEpsDPHak5XnCjb4LQFBenheEKQ%3D%3D"
                      alt="Product"
                    ></img>
                  </div>
                  <div className="product__info">
                    <p className="product__info__brand">Lev'is</p>
                    <p>
                      <span>Renk: </span>Lacivert
                    </p>
                  </div>
                  <div className="product__price">
                    <span>1.999,00TL</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
