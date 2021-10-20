import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 1rem 7rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;

    .products {
      justify-content: center !important;
    }
  }

  @media only screen and (max-width: 1135px) {
    .products {
      justify-content: center !important;
    }
  }

  .spinner {
    margin: auto;
  }

  .banner {
    width: 100%;
    max-height: 400px;
  }

  .selected {
    color: #4b9ce2;
  }

  .products {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .product {
    padding: 1rem 0;
    background-color: white;
    border-radius: 0.3rem;
    margin: 1rem 1rem;
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

      &__brand {
        color: #4b9ce2;
      }
    }

    &__price {
      padding: 0.4rem 1rem;
      font-weight: bold;
    }
  }
`;
