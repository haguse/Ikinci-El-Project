import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./ScCategories";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categoriesActions";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesData);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Wrapper className="categories">
      <ul>
        <li>
          <NavLink exact to={`/`}>
            HEPSİ
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`/products/${category.title}`}>
              {category.title.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Categories;
