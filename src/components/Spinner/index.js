import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="#4B9CE2"
      height={100}
      width={100}
    //   timeout={3000} //3 secs
    />
  );
};

export default Spinner;
