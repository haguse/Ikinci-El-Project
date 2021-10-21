import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #555555;
`;

export const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:first-child) {
    margin-top: 1rem;
  }
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 0.2rem;
  padding: 0.4rem;

  .offer__content {
    display: flex;

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
    width: 78px;
    height: 84px;
  }
`;
