import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
    grid-gap: 0.5rem;

    .product {
      width: auto !important;
      height: 275px !important;

      & img {
        height: 150px !important;
      }

      &__info {
        flex-direction: column !important;
      }
    }
  }

  .product {
    padding: 1rem 0;
    background-color: white;
    border-radius: 0.3rem;
    margin: 1rem auto 1rem auto;
    width: 16rem;

    &__img {
      & img {
        width: 90%;
        display: block;
        margin: auto;
        height: 300px;
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;
      padding: 0.4rem 1rem;

      & span {
        font-size: 13px;
      }

      &__brand {
        color: #4b9ce2;
        font-size: 15px;
      }
    }

    &__price {
      padding: 0.4rem 1rem;
      font-weight: bold;
    }
  }
`;
