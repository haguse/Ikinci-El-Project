import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 182, 231, 0.4);

  .modal {
    margin: auto !important;
    padding: 20px;
    border: 1px solid #888;
    width: 20rem;
    background: white;
    border: none;
    border-radius: 0.2rem;

    &__title {
      font-size: larger;
      text-align: center;
    }

    &__text  {
      margin-top: 2rem;
      text-align: center;
    }
    & button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: large;
      max-width: 14rem;
    }
  }
`;

export const ButtonOne = styled.button`
  background-color: #4b9ce2;
  color: #f0f8ff;
`;

export const ButtonTwo = styled.button`
  background-color: #f0f8ff;
  color: #4b9ce2;
  margin-left: 1rem;
`;
