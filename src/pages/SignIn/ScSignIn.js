import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh !important;
  background-color: #f2f2f2;
  display: flex;
  color: #525252;

  @media only screen and (max-width: 768px) {
    .container__content {
      flex: 1;
      padding: 1rem 1rem !important;
      & .sign {
        width: 100% !important;
      }

      &__texts {
        text-align: center;
        &__sign {
          font-size: 1.2rem;
          font-weight: normal;
          margin-bottom: 0.4rem;
        }
      }

      & .sign {
        padding: 2rem 1rem !important;
      }

      &__img {
        top: 40px !important;

        & img {
          width: 10rem;
        }
      }
    }
  }

  @media only screen and (max-width: 380px) {
    .container__content {
      & .sign {
        padding: 2rem 1rem !important;
      }

      margin-top: -4px !important;

      &__img {
        top: 40px !important;
        position: static !important;

        & img {
          width: 10rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .sign {
      width: 70% !important;
    }
    .container__image {
      & img {
        width: 550px !important;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .container__image {
      & img {
        width: 500px !important;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .sign {
      width: 80% !important;
    }
  }

  @media only screen and (max-width: 1060px) {
    .container__image {
      display: none;
    }
  }

  .container__image {
    & img {
      width: auto;
      height: 100vh;
    }
  }

  .container__content {
    display: flex;
    flex: 1;
    /* margin-top: 3rem; */
    flex-direction: column;
    /* padding: 1rem 0 1rem 0; */
    align-items: center;
    margin: auto;

    & img {
      margin-bottom: 2rem;
    }

    &__img {
      position: absolute;
      top: 20px;
    }

    & .sign {
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 5rem 4rem;
      width: 50%;
      border-radius: 1rem;
      /* margin-top: 2rem; */
      position: relative;

      &__texts {
        text-align: center;
        margin-bottom: 2rem;
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
          margin-top: 1rem;
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

        & [type="email"]:invalid {
          color: #f77474;
          background-color: #fff2f2;
          border: #f77474;
        }
        & [type="email"]:valid {
          background-color: #f0f8ff;
          border: #4b9ce2;
        }

        & [type="password"]:invalid {
          color: #f77474;
          background-color: #fff2f2;
          border: #f77474;
        }
        & [type="password"]:valid {
          background-color: #f0f8ff;
          border: #4b9ce2;
        }
      }

      & button {
        margin-top: 2rem;
        font-size: large;
        font-weight: bold;
        width: 100%;
        color: white;
        background-color: #4b9ce2;
        padding: 0.6rem 0rem;
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
