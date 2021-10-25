import styled from "styled-components";

export const ModalContainer = styled.div`
  color: #525252;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 182, 231, 0.4);
  border-radius: 0.4rem;

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
      text-align: left;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      background-color: #f0f8ff;
      padding: 0.4rem 1rem;
      & img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.4rem;
      }
      & p {
        font-size: small;
      }
      & span {
        font-weight: bold;
      }
    }

    &__text  {
      margin-top: 2rem;
      text-align: center;
    }
    & button {
      margin-top: 2rem;
      padding: 0.6rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: large;
    }

    &__offers {
      &__offer {
        display: flex;
        align-items: center;
        margin: 10px 0;
        border: 1px solid rgba(82, 82, 82, 0.1);

        border-radius: 0.4rem;
        padding: 0.6rem 0.4rem;
        font-size: 15px;

        &__custom {
          width: 100%;
          border: none;
          background-color: #f4f4f4;
          padding: 0.6rem 0.4rem;
          border-radius: 0.4rem;
        }
      }
    }

    input[type="radio"]:checked:after {
      background-color: #ffa500;
    }
  }
`;

export const ButtonOne = styled.button`
  background-color: #4b9ce2;
  color: #f0f8ff;
  width: 100%;
  margin: auto;
`;
