import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./ScCategories";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <Wrapper className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to="#" activeClassName="selected">
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Categories;
