import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "styled-components";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = () => {
  return <ClipLoader color="#4B9CE2" css={override} size={150} />;
};

export default Spinner;
