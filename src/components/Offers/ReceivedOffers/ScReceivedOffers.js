import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #555555;
`;

export const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:first-child) {
    margin-top: 1rem;
  }
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem 0;

    & button {
      margin-top: 1rem;
    }
  }

  & button:first-child {
    margin-right: 1rem;
  }
  .offer__content {
    display: flex;

    @media screen and (max-width: 1000px) {
      margin-bottom: 1rem;
    }

    &__desc {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.8rem 0;

      & div {
        background-color: #f2f2f2;
        padding: 0.6rem 2.8rem 0.6rem 0.4rem;
        border-radius: 0.4rem;
        font-size: small;
        & span {
          font-weight: bold;
          margin-left: 0.4rem;
        }
      }
    }
  }

  & img {
    border-radius: 0.4rem;
    width: 78px;
    height: 84px;
  }

  & .offer-accepted {
    display: flex;
    align-items: center;

    & p {
      margin-left: 1rem;
    }
  }

  & .offer-rejected {
    display: flex;
    align-items: center;

    & p {
      margin-left: 1rem;
    }
  }

  .isSold {
    color: "#B1B1B1";
    display: inline-block;
    margin-left: 0.4rem;
    font-size: small;
  }
`;

export const ButtonAccept = styled.button`
  color: white;
  background-color: #4b9ce2;
  border: none;
  border-radius: 0.3rem;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
`;

export const ButtonReject = styled.button`
  color: white;
  background-color: #f77474;
  border: none;
  border-radius: 0.3rem;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
`;
