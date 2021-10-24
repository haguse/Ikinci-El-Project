import styled from "styled-components";

export const Wrapper = styled.div`
  color: #555555;
  padding: 1rem 7rem;
  min-height: 100vh;
  background-color: #f2f2f2;

  .product {
    display: flex;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 0.4rem;

    &__image {
      width: 70%;
      height: 100%;
      border-radius: 0.3rem;

      & img {
        width: 100%;
        height: 100%;
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

    .not-offerable {
      margin-top: 2rem;
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
      margin-left: 4rem;
      margin-top: 0.8rem;
      width: 100%;

      &__offerPrice {
        margin-top: 1rem;
        background-color: #f2f2f2;
        display: inline-block;
        padding: 0.4rem 2rem 0.4rem 0.6rem;
        border-radius: 0.4rem;
        & p {
          color: #b1b1b1;
        }

        & span {
          color: #525252;
          font-weight: bold;
        }
      }

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
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: large;
      max-width: 14rem;
      min-width: 14rem;
    }
  }

  .cant-buy {
    padding: 1rem 1rem !important;
    background-color: #fff0e2 !important;
    color: #faad60 !important;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
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

  .loading {
    position: absolute;
    top: 100px;
    left: 100px;
  }
`;
