import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterProducts = (id) => {
    if (id === null) {
      dispatch(getAllProducts());
    }
    dispatch(filterProductsByCategory(id));
  };

  return (
    <Wrapper className="categories">
      <ul>
        <li>
          <NavLink
            onClick={() => filterProducts(null)}
            to="#"
            activeClassName="selected"
          >
            HEPSİ
          </NavLink>
        </li>
        {categories.categoriesData.map((category) => (
          <li key={category.id}>
            <NavLink
              onClick={() => filterProducts(category.id)}
              to="#"
              activeClassName="selected"
            >
              {category.title.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Categories;
