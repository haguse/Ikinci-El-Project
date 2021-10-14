import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 7rem;
  min-height: 100vh;
  background-color: #f2f2f2;

  .product {
    display: flex;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 0.4rem;

    &__image {
      width: 100%;
      border-radius: 0.3rem;

      & img {
        width: 100%;
        max-height: 500px;
        border-radius: 0.3rem;
        max-width: 600px;
      }
    }

    @media only screen and (max-width: 1225px) {
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;

      & div {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      &__image {
        & img {
          max-width: 520px;
        }
      }
    }

    @media only screen and (max-width: 559px) {
      button {
        display: block;
        margin: 2rem auto 0 auto !important;
      }
    }

    @media only screen and (max-width: 450px) {
      .product__content__info {
        width: 100%;

        & p {
          font-size: small;
        }

        & span {
          font-size: small;
        }
      }
    }

    &__content {
      margin-left: 1rem;
      margin-top: 2rem;
      width: 100%;

      &__title {
        font-size: x-large;
        font-weight: bold;
      }

      &__info {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        width: 18rem;

        &__title {
          font-weight: bold;
        }
      }

      &__price {
        margin-top: 2rem;
        font-weight: bold;
        font-size: large;
      }

      &__desc__title {
        margin-top: 2rem;
        font-weight: bold;
      }

      &__desc {
        margin-top: 1rem;
      }
    }

    & button {
      margin-top: 2rem;
      padding: 1rem 4rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: large;
      width: 14rem;
    }
  }

  button:nth-child(1) {
    background-color: #4b9ce2;
    color: #f0f8ff;
  }
  button:nth-child(2) {
    background-color: #f0f8ff;
    color: #4b9ce2;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
