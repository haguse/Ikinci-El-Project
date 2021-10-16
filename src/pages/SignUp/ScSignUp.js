import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh !important;
  background-color: #f2f2f2;
  display: flex;

  @media only screen and (max-width: 768px) {
    .container__image {
      display: none;
    }
    .container__content {
      flex: 1;
      padding: 1rem 1rem !important;
    }
  }

  .container__image {
    & img {
      width: 50vw;
      height: 100vh;
    }
  }

  .container__content {
    display: flex;
    flex: 1;
    margin-top: 3rem;
    flex-direction: column;
    padding: 1rem 4rem;
    align-items: center;

    & .sign {
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 3rem 0;
      width: 100%;
      border-radius: 1rem;
      margin-top: 2rem;

      &__texts {
        text-align: center;
        &__sign {
          font-size: 2rem;
          font-weight: bolder;
          margin-bottom: 1.5rem;
        }
      }

      &__form {
        margin: auto;
        width: 90%;

        &__item {
          margin-top: 0.7rem;
        }

        & input {
          display: block;
          margin-top: 0.3rem;
          width: 100%;
          padding: 0.8rem 1rem;
          background-color: #f4f4f4;
          border: none;
          border-radius: 0.4rem;
        }
      }

      & button {
        margin-top: 1rem;
        font-size: large;
        font-weight: bold;
        width: 100%;
        color: white;
        background-color: #4b9ce2;
        padding: 1rem 0rem;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
      }

      &__login {
        margin-top: 2rem;
        text-align: center;
        & span {
          color: #4b9ce2;
        }
      }
    }
  }
`;
