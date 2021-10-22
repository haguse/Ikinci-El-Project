import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./ScCategories";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categoriesActions";
import {
  filterProductsByCategory,
  getAllProducts,
} from "../../actions/productsActions";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  console.log({ products });
  const dispatch = useDispatch();

  // const [categoryId, setCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterProducts = (id) => {
    if (id === null) {
      dispatch(getAllProducts());
    }
    dispatch(filterProductsByCategory(id));
    setSelectedCategory(id);
  };

  return (
    <Wrapper className="categories">
      <ul>
        <li className={`${selectedCategory === "all" && "active"} `}>
          <Link
            onClick={() => {
              filterProducts(null);
              setSelectedCategory("all");
            }}
            to="#"
          >
            HEPSİ
          </Link>
        </li>
        {categories.categoriesData.map((category) => (
          <li
            className={`${selectedCategory === category.id && "active"}`}
            key={category.id}
          >
            <Link onClick={() => filterProducts(category.id)} to="#">
              {category.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Categories;
